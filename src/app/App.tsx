import { 
  Plane, 
  Hotel, 
  UtensilsCrossed, 
  MapPin, 
  AlertCircle, 
  Camera, 
  Users, 
  Award,
  Clock,
  Monitor,
  Wifi,
  Headphones,
  CreditCard,
  CheckCircle,
  Globe,
  Sparkles
} from 'lucide-react';

export default function App() {
  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('enroll-section');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
          {/* Main Hero Content */}
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Набор открыт!</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">Курс</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
                «Английский для путешествий»
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed px-4">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
              в отпуске, поездках и будущих путешествиях!
            </p>

            {/* Hero Image */}
            <div className="relative max-w-5xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1621526326182-f6aa6145c5eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRyYXZlbCUyMGFpcnBvcnQlMjBzdW5zZXR8ZW58MXx8fHwxNzc0MjQ5MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Путешествия"
                className="w-full h-64 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>

            <button
              onClick={scrollToEnroll}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-400 hover:to-orange-400 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Записаться на курс
            </button>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16 sm:py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              📌 Для кого курс
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Первая группа</h3>
              </div>
              <p className="text-3xl font-bold text-cyan-400">4–5 класс</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Вторая группа</h3>
              </div>
              <p className="text-3xl font-bold text-orange-400">6–8 класс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              📚 Программа курса
            </h2>
          </div>

          <div className="grid gap-6 lg:gap-8">
            {/* Module 1 */}
            <div className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Аэропорт без стресса
                  </h3>
                  <p className="text-slate-400 mb-3">
                    Регистрация, паспортный контроль, вопросы на таможне — всё на английском.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Уверенность уже в первые часы за границей</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="group bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Hotel className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    В отеле: заселение и помощь
                  </h3>
                  <p className="text-slate-400 mb-3">
                    Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Практика вежливых фраз и повседневной лексики</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <UtensilsCrossed className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Кафе и рестораны
                  </h3>
                  <p className="text-slate-400 mb-3">
                    Заказ еды, вопросы про аллергены, счёт и чаевые.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Развитие гастрономического словаря и уверенности в общении</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="group bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    На улице: ориентирование и просьбы
                  </h3>
                  <p className="text-slate-400 mb-3">
                    Как спросить дорогу, вызвать такси или найти аптеку.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Понимание устной речи и произношения в реальных ситуациях</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Экстренные случаи
                  </h3>
                  <p className="text-slate-400 mb-3">
                    Потеря вещей, болезнь, помощь полиции — всё это на английском.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Важные фразы, которые могут спасти отпуск</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="group bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Туризм и развлечения
                  </h3>
                  <p className="text-slate-400 mb-3">
                    Покупка билетов, экскурсии, общение с гидами, музеи и парки.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Погружение в культурный контекст через язык</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 7 */}
            <div className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Дружба в путешествиях
                  </h3>
                  <p className="text-slate-400 mb-3">
                    Как познакомиться с другими детьми или подростками за границей.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Игровая практика диалогов и неформального общения</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 8 */}
            <div className="group bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Дипломный проект: «Мой идеальный отпуск»
                  </h3>
                  <p className="text-slate-400 mb-3">
                    Ребёнок планирует воображаемое путешествие и представляет его на английском.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Развитие связной речи и творческого самовыражения</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Special Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ✨ Почему этот курс особенный?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/60 backdrop-blur border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <Globe className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Практическая речь</h3>
              <p className="text-slate-400 text-sm">
                Акцент на практическую, живую речь, а не на грамматику ради грамматики
              </p>
            </div>

            <div className="bg-slate-900/60 backdrop-blur border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-300">
              <MapPin className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Реальные ситуации</h3>
              <p className="text-slate-400 text-sm">
                Все ситуации — из реальной жизни путешественника
              </p>
            </div>

            <div className="bg-slate-900/60 backdrop-blur border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <Sparkles className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Интерактив</h3>
              <p className="text-slate-400 text-sm">
                Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты
              </p>
            </div>

            <div className="bg-slate-900/60 backdrop-blur border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-300">
              <Award className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Уровень A2–B1</h3>
              <p className="text-slate-400 text-sm">
                Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              💻 Что потребуется
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <Monitor className="w-12 h-12 text-cyan-400 mb-4" />
              <p className="text-slate-300 text-sm">
                Стационарный компьютер или ноутбук
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <Headphones className="w-12 h-12 text-orange-400 mb-4" />
              <p className="text-slate-300 text-sm">
                Наушники и микрофон
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <Wifi className="w-12 h-12 text-cyan-400 mb-4" />
              <p className="text-slate-300 text-sm">
                Стабильный интернет
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <Globe className="w-12 h-12 text-orange-400 mb-4" />
              <p className="text-slate-300 text-sm">
                Zoom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule and Pricing Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Clock className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  🕒 Расписание
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <p className="text-cyan-300 font-semibold">Четверг, 15:00 (МСК)</p>
                  </div>
                  <p className="text-slate-400 ml-5">группа 4–5 класс</p>
                </div>

                <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    <p className="text-orange-300 font-semibold">Пятница, 15:30 (МСК)</p>
                  </div>
                  <p className="text-slate-400 ml-5">группа 6–8 класс</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <CreditCard className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  💳 Стоимость
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-orange-500/40 rounded-2xl p-6 hover:border-orange-500/60 transition-all duration-300">
                  <p className="text-slate-300 mb-2">Полный курс (10 уроков)</p>
                  <p className="text-4xl font-bold text-orange-400">12 000 ₽</p>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/40 rounded-2xl p-6 hover:border-cyan-500/60 transition-all duration-300">
                  <p className="text-slate-300 mb-2">Абонемент</p>
                  <p className="text-4xl font-bold text-cyan-400">1 300 ₽<span className="text-xl text-slate-400"> / урок</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 via-orange-500/10 to-cyan-500/10 border border-slate-700 rounded-3xl p-8 sm:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">Места ограничены!</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              📢 Набор открыт!
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-6 max-w-3xl mx-auto">
              Группы маленькие — максимум <span className="text-cyan-400 font-semibold">6 детей</span>, 
              чтобы каждый получил внимание.
            </p>

            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700">
                <img 
                  src="https://images.unsplash.com/photo-1660795469319-9956a233a54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnRzJTIwbGVhcm5pbmclMjBlbmdsaXNofGVufDF8fHx8MTc3NDI0OTIwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Дети изучают английский"
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>
            </div>

            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              👉 Запишитесь сейчас — и следующее путешествие станет первым, 
              где ваш ребёнок заговорит по-английски без страха!
            </p>
          </div>
        </div>
      </section>

      {/* Enroll Button Section */}
      <section id="enroll-section" className="py-16 sm:py-24 scroll-mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            className="group relative w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-cyan-500 via-orange-500 to-cyan-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-2xl text-xl sm:text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
            onClick={() => alert('Спасибо за интерес! Скоро с вами свяжется наш менеджер.')}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Записаться на курс
              <Sparkles className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-300" />
            </span>
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

          <p className="mt-6 text-slate-400">
            Нажимая на кнопку, вы соглашаетесь с нашей политикой конфиденциальности
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-cyan-400" />
            <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Английский для путешествий
            </p>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 Все права защищены. Откройте мир вместе с нами!
          </p>
        </div>
      </footer>
    </div>
  );
}
