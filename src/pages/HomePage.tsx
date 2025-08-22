import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Target, Exhibition, Brand, Presentation, Strategy, TrendingUp, Sparkles } from '../components/Icons';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = '展会主题与品牌定位';
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // 打字机效果
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  // 滚动动画控制
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const courseModules = [
    {
      title: '一. 全球消费电子展发展趋势',
      description: '本章节聚焦全球消费电子展发展趋势，学员将了解到消费电子展中5G、智能穿戴等新兴技术的应用趋势，学会分析展会中展现的市场需求与品牌走向，掌握从消费电子展趋势中洞察品牌定位方向的技能，能更好把握消费电子领域的市场动态与品牌发展脉络。',
      icon: TrendingUp,
      path: '/course/consumer-electronics-trends',
      color: 'from-purple-400 to-pink-400',
      delay: 0.1
    },
    {
      title: '二. 展会主题与品牌定位的核心概念',
      description: '本章节聚焦展会主题与品牌定位的核心概念，学员将学习明确展会主题的构成要素，掌握品牌定位的方法，能分析如何让展会主题契合品牌定位，学会运用相关知识构建独特且有吸引力的展会主题，精准定位品牌，提升在展会策划与品牌建设方面的实际操作技能。',
      icon: Brand,
      path: '/course/theme-brand-concepts',
      color: 'from-purple-500 to-indigo-400',
      delay: 0.2
    },
    {
      title: '三. 展会主题与品牌定位的主要流程',
      description: '该章节主要讲解展会主题与品牌定位的主要流程，首先要明确展会核心主题，需结合行业趋势等；然后分析品牌目标受众、市场定位等；学员将学到如何精准确定展会主题，清晰把握品牌受众，掌握制定贴合品牌的展会策略，提升展会策划与品牌定位的实际操作技能，为后续展会相关工作打下基础。',
      icon: Strategy,
      path: '/course/positioning-process',
      color: 'from-pink-400 to-purple-400',
      delay: 0.3
    },
    {
      title: '四. 展会主题策划与品牌定位方法',
      description: '本章节重点讲解展会主题策划与品牌定位方法。学员将学会结合市场状况策划展会主题，还能掌握品牌定位技巧，如分析目标受众、找出品牌独特卖点，从而明确展会与品牌的特色方向，提升其在市场中的辨识度与竞争力。',
      icon: Presentation,
      path: '/course/planning-methods',
      color: 'from-indigo-400 to-purple-500',
      delay: 0.4
    },
    {
      title: '五. 消费电子展主题与品牌定位案例',
      description: '本章节是消费电子展主题与品牌定位案例学习，学员能学到剖析消费电子展主题如何贴合市场，掌握品牌在展会上精准定位的方法，像从产品特性、受众角度分析成功案例中主题与定位的关联，提升消费电子展会相关的分析与策划技能。',
      icon: Exhibition,
      path: '/course/case-studies',
      color: 'from-purple-400 to-indigo-400',
      delay: 0.5
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    y: -8,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 30
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 主标题区域 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ y }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            <Exhibition className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-white"
              >
                |
              </motion.span>
            </span>
            <motion.span 
              className="block text-2xl font-normal text-white mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              商业活动策划专业核心课程
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            通过系统性学习展会主题策划与品牌定位知识，掌握消费电子展发展趋势分析，
            培养具备展会策划、品牌定位、市场分析和活动执行能力的专业人才。
          </motion.p>
        </motion.div>

        {/* 课程特色 - 滚动动画 */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {[
            { icon: Target, title: '实用性强', desc: '紧密结合消费电子展会实际案例，从展会主题构思到品牌定位实施，培养学员解决实际展会策划与品牌定位问题的能力。' },
            { icon: Exhibition, title: '系统完整', desc: '涵盖展会主题策划的全流程，从市场调研到主题设计，从竞争分析到品牌定位，构建完整的展会策划知识体系。' },
            { icon: Sparkles, title: '前沿导向', desc: '紧跟消费电子展行业发展趋势，掌握新兴技术应用，培养具备前瞻性思维的展会策划专业人才。' }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-base text-center cursor-pointer p-8 group"
                whileHover={{
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 课程模块 - 3D效果 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            课程章节
          </motion.h2>
          
          {/* 课程模块网格布局 - 调整为支持5个模块 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: module.delay, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={cardHover}
                  className="h-full"
                >
                  <Link
                    to={module.path}
                    className="group relative glass-card p-8 transition-all duration-300 block h-full hover:shadow-glass-hover"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-l-2xl"></div>
                    <motion.div 
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ background: `linear-gradient(135deg, ${module.color.split(' ').join(', ')})` }}
                    />
                    
                    <div className="flex flex-col h-full relative z-10">
                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 15,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <motion.h3 
                            className="text-lg font-semibold text-white mb-3 group-hover:text-white transition-colors leading-tight"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {module.title}
                          </motion.h3>
              </div>
            </div>
            
                      <p className="text-white/80 mb-6 leading-relaxed flex-grow text-sm">
                        {module.description}
                      </p>
                      
                      <motion.div 
                        className={`flex items-center text-white group-hover:text-white/80 mt-auto ${
                          index === 0 ? 'drop-shadow-md' : ''
                        }`}
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-sm font-medium">开始学习</span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.div>
                      </motion.div>
              </div>
                </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>


        {/* 学习路径指引 - 弹簧动画 */}
        <motion.div 
                      className="glass-effect rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.6)",
            borderColor: "rgba(255, 255, 255, 0.3)"
          }}
        >
          {/* 背景动画粒子效果 */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.h2 
                            className="text-3xl font-bold text-white mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            开始你的展会策划学习之旅
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            按照模块顺序学习，从基础认知到实践应用，循序渐进掌握展会策划与品牌定位精髓。
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/objectives"
                className="btn-primary rounded-xl font-semibold transition-all duration-300 shadow-lg inline-block"
              >
                查看学习目标
              </Link>
            </motion.div>
            

          </motion.div>
        </motion.div>
              </div>
            </div>
  );
  };
  
export default HomePage; 