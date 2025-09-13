'use client';

import { ArrowRight, Clock, MapPin, Calendar, Users, Zap, Star } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#008C8C] to-[#006666] rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">TimeLink</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-[#008C8C] dark:hover:text-[#00A3A3] transition-colors">{t.nav.features}</a>
              <a href="#use-cases" className="text-slate-600 dark:text-slate-300 hover:text-[#008C8C] dark:hover:text-[#00A3A3] transition-colors">{t.nav.useCases}</a>
              <LanguageToggle />
              <button className="bg-[#008C8C] hover:bg-[#006666] text-white px-4 py-2 rounded-lg transition-colors">
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            {t.hero.title}
            <span className="bg-gradient-to-r from-[#008C8C] to-[#006666] bg-clip-text text-transparent"> {t.hero.titleHighlight}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-[#008C8C] hover:bg-[#006666] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              {t.hero.startNow} <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-[#008C8C] px-8 py-4 rounded-xl text-lg font-semibold transition-all">
              {t.hero.watchDemo}
            </button>
          </div>

          {/* Demo Timeline Preview */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#008C8C] to-[#006666]"></div>

                {[
                  { title: t.timeline.projectStart, date: t.timeline.projectStartDate, side: "left", color: "blue" },
                  { title: t.timeline.requirementAnalysis, date: t.timeline.requirementDate, side: "right", color: "green" },
                  { title: t.timeline.designPhase, date: t.timeline.designDate, side: "left", color: "purple" },
                  { title: t.timeline.development, date: t.timeline.developmentDate, side: "right", color: "orange" },
                ].map((item, index) => (
                  <div key={index} className={`flex items-center mb-8 ${item.side === 'right' ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex-1 ${item.side === 'right' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-lg border border-slate-200 dark:border-slate-600">
                        <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.date}</p>
                      </div>
                    </div>
                    <div className={`w-4 h-4 bg-${item.color}-500 rounded-full border-4 border-white dark:border-slate-800 z-10`}></div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t.features.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: t.features.dragEdit,
                description: t.features.dragEditDesc
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: t.features.templates,
                description: t.features.templatesDesc
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: t.features.collaboration,
                description: t.features.collaborationDesc
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: t.features.mapIntegration,
                description: t.features.mapIntegrationDesc
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: t.features.flexibleTime,
                description: t.features.flexibleTimeDesc
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: t.features.exportShare,
                description: t.features.exportShareDesc
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#008C8C] to-[#006666] rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t.useCases.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.useCases.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.useCases.travelPlan, emoji: "✈️", desc: t.useCases.travelPlanDesc },
              { title: t.useCases.historicalEvents, emoji: "📚", desc: t.useCases.historicalEventsDesc },
              { title: t.useCases.projectManagement, emoji: "📊", desc: t.useCases.projectManagementDesc },
              { title: t.useCases.personalGrowth, emoji: "🌱", desc: t.useCases.personalGrowthDesc }
            ].map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-4">{useCase.emoji}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{useCase.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#008C8C] to-[#006666]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#008C8C] hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105">
              {t.cta.freeStart}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#008C8C] px-8 py-4 rounded-xl text-lg font-semibold transition-all">
              {t.cta.contactUs}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#008C8C] to-[#006666] rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TimeLink</span>
              </div>
              <p className="text-slate-400 max-w-md">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.product}</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.features}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.templates}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.pricing}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.helpCenter}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.support}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.feedback}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
