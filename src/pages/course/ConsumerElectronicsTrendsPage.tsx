import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, Globe, Eye, Target, Sparkles, Zap, Shield } from '../../components/Icons';
import DigitalAvatarPlayer from '../../components/DigitalAvatarPlayer';

const ConsumerElectronicsTrendsPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 头部导航 */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回首页</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-white/50 text-sm">第1章</span>
            <div className="w-px h-4 bg-white/20"></div>
            <span className="text-white/70 text-sm">共5章</span>
          </div>
        </motion.div>

        {/* 主标题 - 增强视觉效果 */}
        <motion.div 
          className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 via-amber-500/20 to-teal-500/20 p-12 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 背景图片 - 增强显示 */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-70 z-10"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第一章全球消费电子展发展趋势/第一章_全球消费电子展发展趋势背景图.jpg)`,
              backgroundBlendMode: 'multiply'
            }}
          ></div>
          <div className="absolute inset-0 bg-black/20 z-20"></div>
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-500/30 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-30 text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-amber-400 rounded-2xl mb-6 shadow-2xl"
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <TrendingUp className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-amber-400 to-teal-400">
              全球消费电子展发展趋势
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              本章节聚焦全球消费电子展发展趋势，学员将了解到消费电子展中5G、智能穿戴等新兴技术的应用趋势，学会分析展会中展现的市场需求与品牌走向。
            </p>
          </div>
        </motion.div>

        {/* 内容区域 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* 头部展会年度主题速览 - 卡片式设计 */}
          <motion.section variants={itemVariants} className="relative">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* 左侧标题卡片 */}
              <div className="lg:col-span-4">
                <div className="sticky top-8 glass-card p-6 border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-amber-400 rounded-xl flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white">01</div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">头部展会年度主题速览</h2>
                  <p className="text-white/70 text-sm">深入解析全球顶级消费电子展的年度主题内涵与发展方向</p>
                </div>
              </div>
              
              {/* 右侧内容区 */}
              <div className="lg:col-span-8 space-y-6 relative">
                <motion.div 
                  className="glass-card p-8"
                  variants={fadeInScale}
                >
                  <p className="text-white/90 leading-relaxed mb-6">
                    全球消费电子展中，头部展会的年度主题是其核心导向。以CES（国际消费电子展）为例，2024年的主题为<span className="text-amber-400 font-bold text-lg mx-1">"All Together Now"</span>。从概念层面看，这一主题体现了后疫情时代消费电子领域对技术融合与协作的强烈需求。
                  </p>
                  
                  {/* 主题内涵分析 - 图标列表 */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-amber-500/10 rounded-2xl p-6 border border-blue-400/30">
                    <h3 className="font-bold text-white mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
                      主题内涵分析
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <span className="text-blue-400 font-semibold">核心理念：</span>
                          <span className="text-white/80 ml-2">打破不同技术领域、不同参与主体之间的壁垒</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <span className="text-amber-400 font-semibold">应用领域：</span>
                          <span className="text-white/80 ml-2">AI（人工智能）、IoT（物联网）、可持续发展</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <span className="text-teal-400 font-semibold">价值导向：</span>
                          <span className="text-white/80 ml-2">引导参展商和观众关注技术协作实现产业整体进步</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 实际应用案例 - 双列卡片 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="glass-card p-6 hover:shadow-glass-hover transition-all duration-300 group"
                    variants={fadeInScale}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <Target className="w-8 h-8 text-blue-400 mr-3" />
                      <h4 className="font-bold text-blue-400">CES 2024</h4>
                    </div>
                    <h5 className="text-white font-semibold mb-3">智能家居展示</h5>
                    <p className="text-white/70 text-sm leading-relaxed">
                      众多厂商展示了基于AI和IoT技术融合的智能家居解决方案，不同品牌的设备通过IoT实现无缝连接，共同呈现出一个互联互通的智能生活场景，充分呼应了"All Together Now"的主题。
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="glass-card p-6 hover:shadow-glass-hover transition-all duration-300 group"
                    variants={fadeInScale}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <Zap className="w-8 h-8 text-amber-400 mr-3" />
                      <h4 className="font-bold text-amber-400">CES 2023</h4>
                    </div>
                    <h5 className="text-white font-semibold mb-3">Catching Light主题</h5>
                    <p className="text-white/70 text-sm leading-relaxed">
                      聚焦于光技术在消费电子领域的应用，包括显示技术、照明技术等方面的创新，如LG展示的采用新型光学材料的8K OLED显示屏，以及飞利浦推出的智能照明系统与智能家居的联动方案。
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* 头部展会年度主题速览 - 数字人视频播放器 */}
            <DigitalAvatarPlayer 
              videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuVykjKxVZbw.mp4"
              position={{ top: 16, right: '-16rem' }}
            />
          </motion.section>

          {/* 热点主题分析 - 网格布局 */}
          <motion.section variants={itemVariants} className="relative">
            <div className="mb-8 text-center">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl mb-4"
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-2">热点主题分析</h2>
              <p className="text-white/70">探索消费电子领域的前沿技术趋势</p>
            </div>
            
            {/* 三列技术卡片 */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <motion.div 
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 border border-blue-400/30 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* 元宇宙背景图 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第一章全球消费电子展发展趋势/第一章_元宇宙背景图.jpg)` }}
                ></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">元宇宙</h3>
                  <p className="text-white/80 text-sm mb-4">
                    随着VR和AR技术的不断发展，消费者对沉浸式数字体验的需求日益增长。
                  </p>
                  <div className="text-blue-400 text-xs font-semibold">
                    探索元宇宙新边界
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 p-6 border border-amber-400/30 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* 人工智能背景图 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第一章全球消费电子展发展趋势/第一章_人工智能背景图.jpg)` }}
                ></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">人工智能</h3>
                  <p className="text-white/80 text-sm mb-4">
                    AI技术深度融入消费电子产品，提供个性化、智能化的用户体验。
                  </p>
                  <div className="text-amber-400 text-xs font-semibold">
                    AI赋能万物互联
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/20 p-6 border border-teal-400/30 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* 绿色科技背景图 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第一章全球消费电子展发展趋势/第一章_绿色科技背景图.jpg)` }}
                ></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">绿色科技</h3>
                  <p className="text-white/80 text-sm mb-4">
                    可持续发展理念推动消费电子向环保、节能方向发展。
                  </p>
                  <div className="text-teal-400 text-xs font-semibold">
                    科技与自然和谐共生
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 5G与元宇宙结合 - 特色展示 */}
            <motion.div 
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500/10 via-amber-500/10 to-teal-500/10 p-8 border border-white/10"
              variants={fadeInScale}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-amber-400 mr-6"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">5G与元宇宙深度融合</h3>
                    <p className="text-white/70">2023年MWC展会亮点技术展示</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-white/80 leading-relaxed">
                      展示了基于5G和元宇宙技术的远程协作办公场景，用户可以通过消费电子设备进入虚拟办公空间。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">高速率</span>
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs">低延迟</span>
                      <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs">流畅交互</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-3">行业发展方向</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      构建更加丰富、便捷的数字虚拟与现实融合的消费电子生态，热点主题为参展商和观众提供了明确的技术发展路线图。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* 热点主题分析 - 数字人视频播放器 */}
            <DigitalAvatarPlayer 
              videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuVykhXj1Zvv.mp4"
              position={{ top: 180, right: '-16rem' }}
            />
          </motion.section>

          {/* 导航按钮 - 增强样式 */}
          <motion.div 
            className="flex justify-between items-center pt-12 pb-8"
            variants={itemVariants}
          >
            <div className="flex-1">
              {/* 左侧占位 */}
            </div>
            
            <Link 
              to="/course/theme-brand-concepts"
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-500 to-amber-500 rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 flex items-center">
                下一章：展会主题与品牌定位的核心概念
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsumerElectronicsTrendsPage;