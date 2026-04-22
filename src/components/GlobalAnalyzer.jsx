import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Search, MapPin, RefreshCw, BarChart2 } from 'lucide-react';

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// A component to handle map flyTo when location changes
function MapUpdater({ center }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 13, { duration: 1.5 });
  }, [center, map]);
  return null;
}

const GlobalAnalyzer = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState('cinnamon');
  const [locationStr, setLocationStr] = useState('Kerala, India');
  const [coordinates, setCoordinates] = useState([10.8505, 76.2711]); // Kerala coordinates
  
  const [metrics, setMetrics] = useState({
    vegetation: 65,
    idle: 20,
    builtUp: 15,
    suitability: 88
  });

  const crops = [
    { id: 'cinnamon', name: 'Cinnamon' },
    { id: 'pepper', name: 'Black Pepper' },
    { id: 'tea', name: 'Tea' },
    { id: 'rubber', name: 'Rubber' }
  ];

  const handleScan = (e) => {
    e.preventDefault();
    if (!locationStr.trim()) return;
    
    setIsScanning(true);
    
    // Simulate network request/GEE scan
    setTimeout(() => {
      // Dummy coordinate changes based on search
      if (locationStr.toLowerCase().includes('sri lanka') || locationStr.toLowerCase().includes('kandy')) {
        setCoordinates([7.2906, 80.6337]);
      } else {
        // slight jitter
        setCoordinates([coordinates[0] + 0.05, coordinates[1] + 0.05]);
      }
      
      // Randomize metrics slightly to simulate new scan
      setMetrics({
        vegetation: Math.floor(Math.random() * 30) + 50,
        idle: Math.floor(Math.random() * 20) + 10,
        builtUp: Math.floor(Math.random() * 15) + 5,
        suitability: Math.floor(Math.random() * 25) + 70
      });
      setIsScanning(false);
    }, 2000);
  };

  const handleCropChange = (cropId) => {
    setSelectedCrop(cropId);
    setIsScanning(true);
    setTimeout(() => {
      // Just change suitability score based on crop
      setMetrics(prev => ({
        ...prev,
        suitability: Math.floor(Math.random() * 30) + 65
      }));
      setIsScanning(false);
    }, 800);
  };

  const ProgressMetric = ({ label, percentage, colorClass }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span className="text-sm font-bold">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full ${colorClass} rounded-full`}
        />
      </div>
    </div>
  );

  return (
    <section id="the-global-analyzer" className="py-24 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-agri-emerald/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-agri-emerald"
          >
            <MapPin size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The <span className="text-agri-emerald">Global Land Analyzer</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Real-time geospatial engine processing live satellite telemetry to calculate land complexity and agricultural viability.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Mapbox/Leaflet Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 flex flex-col gap-4"
          >
            <div className="glass rounded-3xl p-4 flex flex-col sm:flex-row gap-4 items-center">
              <form onSubmit={handleScan} className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  value={locationStr}
                  onChange={(e) => setLocationStr(e.target.value)}
                  placeholder="Enter location (e.g. Kerala, India)"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-agri-emerald transition-colors"
                />
              </form>
              <button 
                onClick={handleScan}
                disabled={isScanning}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-agri-emerald hover:bg-agri-emeraldDark text-white font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
              >
                {isScanning ? (
                  <RefreshCw className="animate-spin" size={20} />
                ) : (
                  <BarChart2 size={20} />
                )}
                Analyze Land
              </button>
            </div>

            <div className="glass rounded-3xl p-2 h-[500px] relative overflow-hidden group">
              {/* Scan Overlay Overlay */}
              {isScanning && (
                <div className="absolute inset-0 z-[400] bg-agri-dark/60 backdrop-blur-sm flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-4 border-slate-700 border-t-agri-emerald rounded-full animate-spin mb-4"></div>
                  <p className="text-agri-emerald font-medium tracking-widest uppercase">Acquiring GEE Telemetry...</p>
                </div>
              )}
              
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                <MapContainer center={coordinates} zoom={13} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  />
                  <Marker position={coordinates}>
                    <Popup className="bg-agri-dark text-white border-slate-700">
                      Target Analysis Region
                    </Popup>
                  </Marker>
                  <MapUpdater center={coordinates} />
                </MapContainer>
              </div>
              
              {/* Overlay UI elements on Map */}
              <div className="absolute bottom-6 left-6 z-[400] flex gap-2">
                <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 border border-slate-700 rounded-md flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-agri-emerald animate-pulse"></div>
                  <span className="text-xs font-mono text-slate-300">Live Satellite Feed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Dynamic Stats Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="glass rounded-3xl p-8 h-full flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Land Complexity</h3>
                <p className="text-slate-400 text-sm">Real-time breakdown of spatial characteristics.</p>
              </div>

              <div className="flex-1">
                <ProgressMetric label="Vegetation Cover" percentage={metrics.vegetation} colorClass="bg-agri-emerald" />
                <ProgressMetric label="Idle / Fallow Land" percentage={metrics.idle} colorClass="bg-yellow-500" />
                <ProgressMetric label="Built-up Area" percentage={metrics.builtUp} colorClass="bg-slate-400" />
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <h4 className="text-lg font-semibold mb-4 text-white">Smart Suitability Filter</h4>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {crops.map((crop) => (
                    <button
                      key={crop.id}
                      onClick={() => handleCropChange(crop.id)}
                      className={`py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                        selectedCrop === crop.id 
                        ? 'bg-agri-emerald text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                        : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {crop.name}
                    </button>
                  ))}
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-agri-emerald/10 blur-[40px]"></div>
                  <p className="text-sm text-slate-400 mb-1">Overall Suitability Score</p>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold text-white">
                      {isScanning ? '--' : metrics.suitability}
                    </span>
                    <span className="text-lg text-agri-emerald mb-1">/ 100</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Calculated for {crops.find(c => c.id === selectedCrop)?.name} cultivation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalAnalyzer;
