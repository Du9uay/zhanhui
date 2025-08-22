import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Exhibition } from './Icons';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const courseModules = [
    { name: '一. 全球消费电子展发展趋势', path: '/course/consumer-electronics-trends' },
    { name: '二. 展会主题与品牌定位的核心概念', path: '/course/theme-brand-concepts' },
    { name: '三. 展会主题与品牌定位的主要流程', path: '/course/positioning-process' },
    { name: '四. 展会主题策划与品牌定位方法', path: '/course/planning-methods' },
    { name: '五. 消费电子展主题与品牌定位案例', path: '/course/case-studies' },
  ];


  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Exhibition className="w-6 h-6 text-white" />
            </div>
            <span className="text-base-50 font-bold text-lg">展会策划教学</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative text-sm font-medium transition-colors focus-accent ${
                isActivePath('/') ? 'text-base-50' : 'text-base-50/80 hover:text-base-50'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课程首页
            </Link>

            <Link
              to="/objectives"
              className={`relative text-sm font-medium transition-colors focus-accent ${
                isActivePath('/objectives') ? 'text-base-50' : 'text-base-50/80 hover:text-base-50'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              学习目标
            </Link>
            <Link
              to="/careers"
              className={`relative text-sm font-medium transition-colors focus-accent ${
                isActivePath('/careers') ? 'text-base-50' : 'text-base-50/80 hover:text-base-50'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              职业发展
            </Link>

            {/* 课程章节下拉菜单 */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="text-sm font-medium text-base-50/80 hover:text-base-50 focus-accent transition-colors flex items-center space-x-1"
              >
                <span>课程章节</span>
                <svg className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 glass-effect shadow-glass-lg">
                  {courseModules.map((module, index) => (
                    <Link
                      key={index}
                      to={module.path}
                      className={`relative block px-4 py-3 text-sm transition-colors ${
                        isActivePath(module.path) 
                          ? 'text-base-50 bg-accent-500/10' 
                          : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
                      }`}
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      {module.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/course-summary"
              className={`relative text-sm font-medium transition-colors focus-accent ${
                isActivePath('/course-summary') ? 'text-base-50' : 'text-base-50/80 hover:text-base-50'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课程总结
            </Link>
            <Link
              to="/course-test"
              className={`relative text-sm font-medium transition-colors focus-accent ${
                isActivePath('/course-test') ? 'text-base-50' : 'text-base-50/80 hover:text-base-50'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课堂测试
            </Link>
            <Link
              to="/homework"
              className={`relative text-sm font-medium transition-colors focus-accent ${
                isActivePath('/homework') ? 'text-base-50' : 'text-base-50/80 hover:text-base-50'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课后作业
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-base-50/80 hover:text-base-50 hover:bg-white/5 transition-colors focus-accent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/') ? 'text-base-50 bg-accent-500/10' : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课程首页
            </Link>

            <Link
              to="/objectives"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/objectives') ? 'text-base-50 bg-accent-500/10' : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              学习目标
            </Link>
            <Link
              to="/careers"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/careers') ? 'text-base-50 bg-accent-500/10' : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              职业发展
            </Link>
            
            {/* 移动端课程章节 */}
            <div className="px-4 py-2">
              <div className="text-sm font-medium text-base-50/60 mb-2">课程章节</div>
              <div className="pl-4 space-y-1">
                {courseModules.map((module, index) => (
                  <Link
                    key={index}
                    to={module.path}
                    className={`block py-2 text-sm transition-colors ${
                      isActivePath(module.path) ? 'text-accent-500' : 'text-base-50/70 hover:text-base-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {module.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/course-summary"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/course-summary') ? 'text-base-50 bg-accent-500/10' : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课程总结
            </Link>
            <Link
              to="/course-test"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/course-test') ? 'text-base-50 bg-accent-500/10' : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课堂测试
            </Link>
            <Link
              to="/homework"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/homework') ? 'text-base-50 bg-accent-500/10' : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课后作业
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 