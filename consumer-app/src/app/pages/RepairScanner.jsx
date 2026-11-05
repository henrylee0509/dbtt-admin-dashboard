import { ImageWithFallback } from "../components/ImageWithFallback";
import { ArrowLeft, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function RepairScanner() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id") || "1";
  const [isScanning, setIsScanning] = useState(false);
  const [currentArea, setCurrentArea] = useState(null);
  const [scannedAreas, setScannedAreas] = useState(new Set());
  const [isPreparing, setIsPreparing] = useState(true);
  const scanPoints = [
    { id: "sole", label: "Sole", position: "bottom-32 left-1/2 -translate-x-1/2" },
    { id: "stitching", label: "Stitching", position: "top-40 left-12" },
    { id: "upper", label: "Upper Leather", position: "top-40 right-12" },
  ];
  useEffect(() => {
    if (isPreparing) {
      const step = setTimeout(() => {
        setIsPreparing(false);
        startScan();
      }, 3e3);
      return () => clearTimeout(step);
    }
  }, [isPreparing]);
  const startScan = () => {
    setIsScanning(true);
    let step = 0;
    const areas = ["sole", "stitching", "upper"];
    const interval = setInterval(() => {
      const area = areas[step];
      setCurrentArea(area);
      setScannedAreas((prev) => new Set([...prev, area]));
      step++;
      if (step >= areas.length) {
        clearInterval(interval);
        setTimeout(() => {
          navigate(`/repair-results?id=${id}`);
        }, 1500);
      }
    }, 2500);
  };
  return (
    <div className="min-h-screen bg-black max-w-[430px] mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white font-semibold">AI Repair Scanner</h1>
          <div className="w-10" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-3 grid-rows-3 h-full">
            {[...Array(9)].map((step, areas) => (
              <div key={areas} className="border border-white/20" />
            ))}
          </div>
        </div>
      </div>
      {!isPreparing && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: isScanning ? [0, 15, -15, 0] : 0,
          }}
          transition={{
            rotateY: {
              duration: 10,
              repeat: 1 / 0,
              ease: "easeInOut",
            },
          }}
          className="absolute inset-0 flex items-center justify-center z-5"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="relative w-80 h-80"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <ImageWithFallback
              src={
                "https://images.unsplash.com/photo-1563434194539-fcc823f9bf92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwc2hvZSUyMHByb2Zlc3Npb25hbCUyMHByb2R1Y3R8ZW58MXx8fHwxNzc0NTg1NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              }
              alt="Shoe being scanned"
              className="w-full h-full object-contain drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
              }}
            />
            {isScanning && (
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: 1 / 0,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 via-transparent to-red-500/20" />
                {[...Array(8)].map((step, areas) => (
                  <motion.div
                    key={areas}
                    className="absolute left-0 right-0 h-px bg-red-400"
                    style={{ top: `${(areas + 1) * 12.5}%` }}
                    animate={{
                      opacity: [0, 1, 0],
                      scaleX: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: 1 / 0,
                      delay: areas * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
      <AnimatePresence>
        {isPreparing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 z-30 flex items-center justify-center px-6"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: 1 / 0 }}
                className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-3">AI Diagnostic Scan</h2>
              <p className="text-gray-300 mb-6">
                We'll guide you through capturing photos of key areas
              </p>
              <div className="space-y-2 text-left bg-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <span className="text-sm">Sole condition</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <span className="text-sm">Stitching integrity</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <span className="text-sm">Upper leather quality</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isScanning && currentArea && (
        <div className="absolute inset-0 z-10">
          {scanPoints.map((step) => (
            <motion.div
              key={step.id}
              className={`absolute ${step.position}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: currentArea === step.id ? 1 : 0.8,
                opacity: currentArea === step.id ? 1 : 0.3,
              }}
            >
              {currentArea === step.id && (
                <motion.div className="relative" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                  <div className="w-32 h-32 border-4 border-red-500 rounded-lg relative">
                    <motion.div
                      className="absolute inset-0 border-4 border-white rounded-lg"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.9, 1.1, 0.9],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: 1 / 0,
                      }}
                    />
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-red-500" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-red-500" />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-red-500" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-red-500" />
                    <motion.div
                      className="absolute inset-x-0 h-0.5 bg-red-500 shadow-lg shadow-red-500"
                      animate={{ top: ["0%", "100%"] }}
                      transition={{
                        duration: 1.5,
                        repeat: 1 / 0,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Scanning {step.label}...
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      )}
      {isScanning && (
        <div className="absolute bottom-8 left-0 right-0 z-20 px-6">
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-sm font-semibold">Analyzing...</span>
              <span className="text-red-400 text-sm">{scannedAreas.size}/3 areas</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 to-red-600"
                initial={{ width: "0%" }}
                animate={{ width: `${(scannedAreas.size / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      )}
      {isScanning && (
        <motion.div
          className="absolute inset-0 border-4 border-red-500 pointer-events-none z-10"
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: 1 / 0,
          }}
        />
      )}
    </div>
  );
}

export default RepairScanner;
