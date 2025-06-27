import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target,
  CheckCircle,
  Settings,
  Cpu,
  Zap,
  Monitor,
  Eye,
  ArrowRight,
  Award
} from '../components/Icons';

const CourseTestPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      category: "行业认知",
      question: "自动化系统的四层架构从下到上正确的顺序是？",
      options: [
        "传感层 → 控制层 → 执行层 → 管理层",
        "执行层 → 传感层 → 控制层 → 管理层", 
        "传感层 → 执行层 → 控制层 → 管理层",
        "控制层 → 传感层 → 执行层 → 管理层"
      ],
      correct: "传感层 → 控制层 → 执行层 → 管理层",
      explanation: "自动化系统按信号流向分为：传感层获取信息，控制层处理信息，执行层执行动作，管理层监控管理。"
    },
    {
      id: 2,
      category: "PLC基础",
      question: "PLC扫描周期的正确执行顺序是？",
      options: [
        "输入采样 → 程序执行 → 输出刷新",
        "程序执行 → 输入采样 → 输出刷新",
        "输出刷新 → 输入采样 → 程序执行",
        "输入采样 → 输出刷新 → 程序执行"
      ],
      correct: "输入采样 → 程序执行 → 输出刷新",
      explanation: "PLC按固定周期工作：先读取输入状态，然后执行程序逻辑，最后更新输出状态。"
    },
    {
      id: 3,
      category: "电气接线",
      question: "PLC输入输出采用的安全电压是？",
      options: [
        "DC 12V",
        "DC 24V", 
        "AC 220V",
        "DC 48V"
      ],
      correct: "DC 24V",
      explanation: "24V直流电压属于安全特低电压，即使人体接触也不会造成电击伤害。"
    },
    {
      id: 4,
      category: "梯形图编程",
      question: "梯形图中LD指令的作用是？",
      options: [
        "输出线圈",
        "常开触点，起始指令",
        "常闭触点",
        "与运算指令"
      ],
      correct: "常开触点，起始指令",
      explanation: "LD（Load）指令用于放置常开触点，通常作为网络的起始指令使用。"
    },
    {
      id: 5,
      category: "梯形图编程",
      question: "以下哪个指令用于实现串联逻辑？",
      options: [
        "LD指令",
        "=指令",
        "A指令",
        "LDN指令"
      ],
      correct: "A指令",
      explanation: "A（And）指令用于与前面的逻辑结果进行与运算，实现串联逻辑。"
    },
    {
      id: 6,
      category: "TIA Portal",
      question: "在TIA Portal中，PLC程序的主组织块是？",
      options: [
        "OB1",
        "FC1",
        "FB1", 
        "DB1"
      ],
      correct: "OB1",
      explanation: "OB1是主组织块（Main Organization Block），是PLC程序的主要执行入口。"
    },
    {
      id: 7,
      category: "安全知识",
      question: "急停按钮应该采用什么类型的触点？",
      options: [
        "常开触点",
        "常闭触点",
        "转换触点",
        "延时触点"
      ],
      correct: "常闭触点",
      explanation: "急停按钮采用常闭触点，正常时闭合，按下时断开，符合故障安全原则。"
    },
    {
      id: 8,
      category: "安全知识",
      question: "以下哪项不是故障安全设计原则？",
      options: [
        "断电安全",
        "常闭设计",
        "软件优先",
        "冗余保护"
      ],
      correct: "软件优先",
      explanation: "故障安全原则要求硬件优先，安全逻辑不能依赖软件，必须通过硬件回路实现。"
    },
    {
      id: 9,
      category: "综合应用",
      question: "在电机启停控制中，实现自保持功能需要？",
      options: [
        "只需要启动按钮",
        "启动按钮和停止按钮",
        "启动按钮、停止按钮和接触器辅助触点",
        "只需要接触器"
      ],
      correct: "启动按钮、停止按钮和接触器辅助触点",
      explanation: "自保持回路需要启动按钮启动，接触器辅助触点维持，停止按钮断开回路。"
    },
    {
      id: 10,
      category: "综合应用",
      question: "共阳极接线方式中，PLC输入模块的公共端应接？",
      options: [
        "0V",
        "+24V",
        "PE地线",
        "AC 220V"
      ],
      correct: "+24V",
      explanation: "共阳极接线方式下，公共端接+24V，输入信号通过负载连接到各输入点。"
    }
  ];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const correctAnswers = questions.filter((q, index) => 
      selectedAnswers[index] === q.correct
    ).length;
    setScore(correctAnswers);
    setShowResults(true);
  };

  const getScoreLevel = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { level: "优秀", color: "text-green-400", message: "恭喜！您已经很好地掌握了PLC基础知识！" };
    if (percentage >= 80) return { level: "良好", color: "text-blue-400", message: "很好！您对PLC基础知识掌握较好！" };
    if (percentage >= 70) return { level: "及格", color: "text-yellow-400", message: "不错！建议复习薄弱环节！" };
    return { level: "需要改进", color: "text-red-400", message: "建议重新学习相关章节！" };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const scoreLevel = getScoreLevel(score);
    
    return (
      <main className="relative z-10 px-6 pb-12">
        <section className="mb-12">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">测试结果</h1>
            <div className="text-6xl font-bold mb-4">
              <span className={scoreLevel.color}>{score}</span>
              <span className="text-white/60">/{questions.length}</span>
            </div>
            <div className="text-2xl font-semibold mb-2">
              <span className={scoreLevel.color}>{scoreLevel.level}</span>
            </div>
            <p className="text-white/80">{scoreLevel.message}</p>
          </div>
        </section>

        <section className="mb-12">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">详细解析</h2>
            <div className="space-y-6">
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correct;
                
                return (
                  <div key={question.id} className="bg-white/5 rounded-lg p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        isCorrect ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <div className="text-blue-300 text-sm mb-1">{question.category}</div>
                        <h3 className="text-white font-semibold mb-3">{question.question}</h3>
                        
                        <div className="grid gap-2 mb-4">
                          {question.options.map((option, optionIndex) => {
                            const isUserAnswer = option === userAnswer;
                            const isCorrectAnswer = option === question.correct;
                            
                            let bgColor = 'bg-white/5';
                            if (isCorrectAnswer) bgColor = 'bg-green-900/30 border-green-400 border';
                            else if (isUserAnswer && !isCorrect) bgColor = 'bg-red-900/30 border-red-400 border';
                            
                            return (
                              <div key={optionIndex} className={`${bgColor} rounded p-3`}>
                                <div className="flex items-center space-x-2">
                                  <div className="w-6 h-6 rounded border border-white/20 flex items-center justify-center text-xs">
                                    {String.fromCharCode(65 + optionIndex)}
                                  </div>
                                  <span className="text-white/90 text-sm">{option}</span>
                                  {isCorrectAnswer && <CheckCircle className="w-5 h-5 text-green-400" />}
                                  {isUserAnswer && !isCorrect && <span className="text-red-400">✗</span>}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        <div className="bg-blue-900/20 rounded p-3">
                          <div className="text-blue-300 font-medium text-sm mb-1">解析</div>
                          <p className="text-blue-200 text-sm">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">继续学习</h2>
            <p className="text-white/80 mb-6">根据测试结果，建议您继续深化学习相关知识。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
                <Link to="/summary" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                  <span>查看课程总结</span>
                </Link>
              </div>
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
                <Link to="/" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                  <span>返回首页</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <main className="relative z-10 px-6 pb-12">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">课堂测试</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            通过10道精选题目检验您的学习成果，巩固PLC控制器基础知识。
          </p>
        </div>
      </section>

      {/* 进度条 */}
      <section className="mb-8">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-medium">
              第 {currentQuestion + 1} 题 / 共 {questions.length} 题
            </span>
            <span className="text-blue-300 text-sm">
              {currentQ.category}
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-400 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </section>

      {/* 题目内容 */}
      <section className="mb-8">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">
            {currentQ.question}
          </h2>
          
          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedAnswers[currentQuestion] === option
                    ? 'border-blue-400 bg-blue-900/20'
                    : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                    selectedAnswers[currentQuestion] === option
                      ? 'border-blue-400 bg-blue-400 text-white'
                      : 'border-white/40 text-white/60'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-white/90">{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 导航按钮 */}
      <section>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentQuestion === 0
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              上一题
            </button>
            
            <div className="text-white/60 text-sm">
              {Object.keys(selectedAnswers).length} / {questions.length} 题已答
            </div>
            
            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length !== questions.length}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  Object.keys(selectedAnswers).length === questions.length
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                提交答案
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
              >
                下一题
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseTestPage;
