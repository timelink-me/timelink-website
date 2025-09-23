export const translations = {
  en: {
    nav: {
      features: "Features",
      useCases: "Use Cases",
      getStarted: "Get Started",
    },
    hero: {
      title: "Make Time",
      titleHighlight: "Visual",
      subtitle:
        "TimeLink is a powerful timeline creation tool that lets you easily create beautiful timelines for travel plans, historical events, project progress, and any time-sequenced content",
      startNow: "Start Now",
      watchDemo: "Watch Demo",
    },
    timeline: {
      projectStart: "Project Start",
      projectStartDate: "January 2025",
      requirementAnalysis: "Requirement Analysis",
      requirementDate: "February 2025",
      designPhase: "Design Phase",
      designDate: "March 2025",
      development: "Development",
      developmentDate: "April 2025",
    },
    features: {
      title: "Powerful Features",
      subtitle:
        "Simple interface, powerful functionality to make your timeline creation more efficient",
      dragEdit: "Drag & Edit",
      dragEditDesc:
        "Intuitive drag interface for easy adding, editing and rearranging timeline items",
      templates: "Beautiful Templates",
      templatesDesc: "Rich preset templates and themes for different scenarios",
      collaboration: "Team Collaboration",
      collaborationDesc:
        "Multi-user collaborative editing with real-time sync updates",
      mapIntegration: "Map Integration",
      mapIntegrationDesc: "Add geographic location markers to travel timelines",
      flexibleTime: "Flexible Time",
      flexibleTimeDesc:
        "Support multiple time formats, accurate to minutes or spanning millennia",
      exportShare: "Export & Share",
      exportShareDesc: "One-click export to images, PDF or share links",
    },
    useCases: {
      title: "Unlimited Use Cases",
      subtitle:
        "From personal records to enterprise projects, TimeLink fits any timeline scenario",
      travelPlan: "Travel Planning",
      travelPlanDesc: "Record itineraries and beautiful memories",
      historicalEvents: "Historical Events",
      historicalEventsDesc: "Sort out historical development context",
      projectManagement: "Project Management",
      projectManagementDesc: "Track project milestones",
      personalGrowth: "Personal Growth",
      personalGrowthDesc: "Record important life moments",
    },
    cta: {
      title: "Start Creating Your Timeline",
      subtitle:
        "Experience TimeLink now and present your stories in the most beautiful way",
      freeStart: "Start Free",
      contactUs: "Contact Us",
    },
    footer: {
      description:
        "Make time visual, record your stories and journeys in the most beautiful way.",
      product: "Product",
      features: "Features",
      templates: "Templates",
      pricing: "Pricing",
      contact: "Contact",
      helpCenter: "Help Center",
      support: "Contact Support",
      feedback: "Feedback",
      copyright: "© 2025 TimeLink. All rights reserved.",
    },
  },
  zh: {
    nav: {
      features: "功能特性",
      useCases: "使用场景",
      getStarted: "开始使用",
    },
    hero: {
      title: "让时间变得",
      titleHighlight: "可视化",
      subtitle:
        "TimeLink 是一款强大的时间线创建工具，让您轻松制作美观的时间轴，记录旅行计划、历史发展、项目进度等任何时序内容",
      startNow: "立即开始",
      watchDemo: "观看演示",
    },
    timeline: {
      projectStart: "项目启动",
      projectStartDate: "2025年1月",
      requirementAnalysis: "需求分析",
      requirementDate: "2025年2月",
      designPhase: "设计阶段",
      designDate: "2025年3月",
      development: "开发实现",
      developmentDate: "2025年4月",
    },
    features: {
      title: "强大功能特性",
      subtitle: "简单易用的界面，强大的功能，让您的时间线创作更加高效",
      dragEdit: "拖拽编辑",
      dragEditDesc: "直观的拖拽界面，轻松添加、编辑和重排时间线条目",
      templates: "精美模板",
      templatesDesc: "丰富的预设模板和主题，满足不同场景需求",
      collaboration: "团队协作",
      collaborationDesc: "支持多人协作编辑，实时同步更新",
      mapIntegration: "地图集成",
      mapIntegrationDesc: "为旅行时间线添加地理位置标记",
      flexibleTime: "灵活时间",
      flexibleTimeDesc: "支持多种时间格式，精确到分钟或跨越千年",
      exportShare: "导出分享",
      exportShareDesc: "一键导出为图片、PDF或分享链接",
    },
    useCases: {
      title: "无限使用场景",
      subtitle: "从个人记录到企业项目，TimeLink 适用于任何需要时间线的场景",
      travelPlan: "旅行计划",
      travelPlanDesc: "记录行程安排和美好回忆",
      historicalEvents: "历史事件",
      historicalEventsDesc: "梳理历史发展脉络",
      projectManagement: "项目管理",
      projectManagementDesc: "跟踪项目里程碑",
      personalGrowth: "个人成长",
      personalGrowthDesc: "记录人生重要时刻",
    },
    cta: {
      title: "开始创建您的时间线",
      subtitle: "立即体验 TimeLink，让您的故事以最美的方式呈现",
      freeStart: "免费开始",
      contactUs: "联系我们",
    },
    footer: {
      description: "让时间变得可视化，用最美的方式记录您的故事和历程。",
      product: "产品",
      features: "功能特性",
      templates: "模板库",
      pricing: "定价",
      contact: "联系我们",
      helpCenter: "帮助中心",
      support: "联系支持",
      feedback: "反馈建议",
      copyright: "© 2025 TimeLink. 保留所有权利。",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
