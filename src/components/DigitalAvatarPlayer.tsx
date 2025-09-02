import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, X } from './Icons';

interface DigitalAvatarPlayerProps {
  videoUrl: string;
  position?: {
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
  };
}

const DigitalAvatarPlayer: React.FC<DigitalAvatarPlayerProps> = ({ 
  videoUrl, 
  position = { top: 16, right: '-16rem' } // 默认位置 -right-64
}) => {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTogglePlay = () => {
    if (!isVideoExpanded) {
      setIsVideoExpanded(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 500);
    } else {
      if (videoRef.current) {
        if (isVideoPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    }
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoExpanded(false);
    setIsVideoPlaying(false);
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  const positionStyle = {
    position: 'absolute' as const,
    zIndex: 20,
    ...(position.top !== undefined && { top: typeof position.top === 'number' ? `${position.top}px` : position.top }),
    ...(position.right !== undefined && { right: typeof position.right === 'number' ? `${position.right}px` : position.right }),
    ...(position.bottom !== undefined && { bottom: typeof position.bottom === 'number' ? `${position.bottom}px` : position.bottom }),
    ...(position.left !== undefined && { left: typeof position.left === 'number' ? `${position.left}px` : position.left }),
  };

  return (
    <div style={positionStyle}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="flex justify-center">
            <AnimatePresence>
              {!isVideoExpanded ? (
                // 圆形播放按钮
                <motion.div className="relative">
                  <motion.div
                    className="w-24 h-24 rounded-full cursor-pointer relative overflow-hidden shadow-xl group"
                    onClick={handleTogglePlay}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { 
                        scale: { type: "spring", stiffness: 300, damping: 20 },
                        rotate: { duration: 0.6, ease: "easeInOut" }
                      }
                    }}
                    whileTap={{ 
                      scale: 0.8,
                      rotate: 0,
                      transition: { 
                        type: "spring", 
                        stiffness: 600, 
                        damping: 15,
                        duration: 0.1
                      }
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                        "0 0 30px rgba(139, 92, 246, 0.7)",
                        "0 0 20px rgba(59, 130, 246, 0.5)"
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                    style={{
                      backgroundColor: '#1a1a2e',
                      transformOrigin: 'center center'
                    }}
                  >
                    {/* 渐变背景层 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 opacity-80 rounded-full"></div>
                    
                    {/* 播放按钮覆盖层 */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300 rounded-full">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <PlayCircle className="w-8 h-8 text-white drop-shadow-lg" />
                      </motion.div>
                    </div>
                    
                    {/* 呼吸光环效果 */}
                    <motion.div
                      className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 pointer-events-none"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </motion.div>
                </motion.div>
              ) : (
                // 展开的视频播放器
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative"
                >
                  {/* 占位元素 - 保持布局稳定 */}
                  <div className="w-24 h-24 opacity-0"></div>

                  {/* 长方形视频容器 - 绝对定位覆盖按钮位置 */}
                  <div 
                    className="absolute w-64 h-36 rounded-xl overflow-hidden shadow-xl"
                    style={{ 
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* 视频播放器 */}
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      onEnded={handleVideoEnd}
                      onPause={() => setIsVideoPlaying(false)}
                      onPlay={() => setIsVideoPlaying(true)}
                      controls
                      controlsList="nodownload noplaybackrate"
                      playsInline
                      preload="auto"
                      style={{ 
                        background: 'transparent',
                        transform: 'scale(0.9)',
                        transformOrigin: 'center center'
                      }}
                    >
                      <source src={videoUrl} type="video/mp4" />
                      您的浏览器不支持视频播放。
                    </video>
                  </div>

                  {/* 控制按钮 - 绝对定位在视频下方 */}
                  <motion.div 
                    className="absolute flex justify-center space-x-2 mt-12"
                    style={{
                      left: '50%',
                      top: '100%',
                      transform: 'translateX(-50%)'
                    }}
                    initial={{ opacity: 1 }}
                    animate={{ 
                      opacity: isVideoPlaying ? 0 : 1,
                      y: isVideoPlaying ? 5 : 0
                    }}
                    transition={{ 
                      duration: 0.2, 
                      ease: "easeOut"
                    }}
                    whileHover={isVideoPlaying ? { 
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.2 }
                    } : {}}
                  >
                    <button
                      onClick={handleTogglePlay}
                      className="w-8 h-8 bg-blue-600/90 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg transform hover:scale-105 active:scale-95"
                    >
                      {isVideoPlaying ? (
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                      ) : (
                        <PlayCircle className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={handleClose}
                      className="w-8 h-8 bg-red-600/90 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg transform hover:scale-105 active:scale-95"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DigitalAvatarPlayer;