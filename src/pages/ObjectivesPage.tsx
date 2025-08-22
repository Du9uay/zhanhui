import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target,
  CheckCircle,
  BookOpen,
  Code,
  Shield
} from '../components/Icons';

const ObjectivesPage: React.FC = () => {
  const [skillProgress, setSkillProgress] = useState<number[]>([]);

  useEffect(() => {
    // 模拟进度条动画
    const timer = setTimeout(() => {
      setSkillProgress([100, 100, 100, 100, 100, 100]);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const learningObjectives = [
    {
      title: '了解展会主题的定义与要素',
      description: '学员将明确展会主题是展会组织方传达核心价值的简洁具吸引力核心思想，其要素包括核心思想、目标受众指向、行业特色等。',
      capabilities: [
        '掌握展会主题的核心定义和构成要素',
        '能够分析消费电子展主题如"智能生活新视界"的内涵和价值'
      ],
      icon: BookOpen,
      color: 'from-accent-primary to-accent-secondary',
      backInfo: '了解这些能让学员精准把握展会主题构建的基本框架，为后续策划奠定基础。'
    },
    {
      title: '理解品牌定位的概念及重要性',
      description: '学员将知晓品牌定位是展会在目标市场确立独特位置的过程，需考虑展会资源、优势及目标市场需求。',
      capabilities: [
        '理解品牌定位对展会脱颖而出的关键作用',
        '掌握"高端定制化消费电子解决方案提供商"等定位的重要意义'
      ],
      icon: Target,
      color: 'from-purple-500 to-indigo-400',
      backInfo: '理解后能帮助学员认识到品牌定位对展会脱颖而出的关键作用。'
    },
    {
      title: '掌握SWOT分析法的操作',
      description: '学员将学会识别展会的优势、劣势、机会和威胁，如通过分析某消费电子展的主办方资源、线上渠道、5G技术普及、同类展会竞争等方面。',
      capabilities: [
        '熟练运用SWOT分析法全面分析展会情况',
        '能够据此调整主题和定位的方法，具备科学分析展会状况的能力'
      ],
      icon: Shield,
      color: 'from-indigo-400 to-purple-500',
      backInfo: '掌握运用SWOT分析法全面分析展会情况，并据此调整主题和定位的方法，具备科学分析展会状况的能力。'
    },
    {
      title: '具备定位一致性检验的能力',
      description: '学员将能够通过线上问卷、线下访谈等方式检验展会主题、定位与目标观众需求的契合度。',
      capabilities: [
        '掌握检验高端商务消费电子展主题是否契合定位的方法',
        '具备及时发现偏差并调整，保证展会各方面协调一致的能力'
      ],
      icon: CheckCircle,
      color: 'from-pink-400 to-purple-400',
      backInfo: '具备该能力可及时发现偏差并调整，保证展会各方面协调一致。'
    },
    {
      title: '运用案例分析优化展会主题与品牌定位',
      description: '学员将能通过正向案例如AR眼镜品牌贴合行业趋势的主题，以及风险案例如过度技术化主题的启示，分析实际展会中主题与品牌定位的应用。',
      capabilities: [
        '能够分析成功案例和失败案例，提取关键经验',
        '运用案例来优化自身对展会主题和品牌定位的策划，提升实际策划的有效性'
      ],
      icon: Code,
      color: 'from-accent-primary to-accent-tertiary',
      backInfo: '运用案例来优化自身对展会主题和品牌定位的策划，提升实际策划的有效性。'
    }
  ];

  const coreSkills = [
    { text: '理解展会主题与品牌定位在商业活动策划中的核心作用', level: 85 },
    { text: '具备分析消费电子展发展趋势，把握市场动态的能力', level: 90 },
    { text: '掌握展会主题策划与品牌定位的完整流程和方法', level: 88 },
    { text: '熟练运用SWOT分析法和定位一致性检验技能', level: 92 },
    { text: '具备独立完成展会主题构思与品牌定位策略制定的能力', level: 86 },
    { text: '掌握展会策划行业规范和商业活动操作标准', level: 89 }
  ];


  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: '100%',
      transition: {
        duration: 2,
        ease: "easeInOut" as const,
        delay: 0.5
      }
    })
  };

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring" as const,
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.5 }
            }}
          >
            <Target className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
              课程学习目标
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/80 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            通过本课程学习，学员将全面掌握展会主题策划与品牌定位核心知识，具备在商业活动策划领域独立工作的能力
          </motion.p>
        </motion.div>
            
        {/* 学习目标详细说明 - 卡片翻转效果 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            详细学习目标
          </motion.h2>

        <div className="space-y-8">
            {learningObjectives.map((objective, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-8"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center flex-shrink-0">
                    <objective.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-6 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">{objective.title}</h3>
                    <p className="text-white/80 mb-4">{objective.description}</p>
                  <div className="space-y-2">
                      {objective.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                          <span className="text-white/80">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
        </motion.div>

        {/* 核心技能总结 - 进度条动画 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            核心技能掌握
          </motion.h2>
          
          <motion.div 
            className="glass-effect rounded-2xl p-8"
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <motion.p 
              className="text-xl text-white/80 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              完成本课程学习后，你将具备以下核心技能：
            </motion.p>
            
            <div className="space-y-6">
              {coreSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 bg-white/10 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                      <span className="text-white/80 leading-relaxed flex-1">
                        {skill.text}
                      </span>
              </div>
                    <motion.span 
                      className="text-white font-semibold ml-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skillProgress[index] || 0}%
                    </motion.span>
                </div>
                
                  {/* 进度条 */}
                  <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={skill.level}
                      viewport={{ once: true }}
                    />
                </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 学习指引 - 弹簧动画 */}
        <motion.div 
          className="glass-effect rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring" as const, 
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
          {/* 背景动画效果 */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{ 
              background: [
                "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 70% 40%, rgba(168, 85, 247, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 50% 70%, rgba(34, 197, 94, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          
          <motion.h2 
                            className="text-3xl font-bold text-white mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            准备开始学习？
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            按照课程模块顺序学习，每个模块都会帮助你达成相应的学习目标
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
                to="/careers"
                className="btn-primary rounded-xl font-semibold transition-all duration-300 shadow-lg inline-block"
              >
                了解职业前景
              </Link>
            </motion.div>
            

          </motion.div>
        </motion.div>
      </div>
          </div>
  );
};

export default ObjectivesPage; 