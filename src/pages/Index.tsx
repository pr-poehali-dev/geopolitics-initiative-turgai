import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

type Language = 'ru' | 'en' | 'kz';

const translations = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      mission: 'Миссия',
      projects: 'Проекты',
      publications: 'Публикации',
      events: 'События',
      partners: 'Партнёры',
      contact: 'Контакты'
    },
    hero: {
      title: 'Инициатива Тургай',
      subtitle: 'Геополитическая платформа для устойчивого развития Центральной Азии',
      cta: 'Присоединиться к программам'
    },
    stats: {
      countries: 'Стран-партнёров',
      projects: 'Активных проектов',
      publications: 'Публикаций',
      events: 'Мероприятий в год'
    },
    mission: {
      title: 'Наша миссия',
      text: 'Содействие устойчивому развитию региона через международное сотрудничество, научные исследования и образовательные инициативы.'
    },
    projects: {
      title: 'Ключевые проекты',
      green: {
        title: 'Зелёная экономика Центральной Азии',
        desc: 'Развитие возобновляемой энергетики и устойчивого природопользования'
      },
      digital: {
        title: 'Цифровой коридор',
        desc: 'Создание трансрегиональной цифровой инфраструктуры'
      },
      education: {
        title: 'Академическая сеть',
        desc: 'Программы обмена и совместные исследования'
      }
    },
    publications: {
      title: 'Недавние публикации',
      report2024: 'Отчёт о геополитической ситуации 2024',
      water: 'Водные ресурсы Центральной Азии',
      trade: 'Торговые маршруты будущего'
    },
    form: {
      title: 'Заявка на участие',
      name: 'Полное имя',
      email: 'Email',
      organization: 'Организация',
      program: 'Выберите программу',
      programs: {
        research: 'Исследовательская программа',
        exchange: 'Программа обмена',
        consulting: 'Консалтинг'
      },
      message: 'Сопроводительное письмо',
      submit: 'Отправить заявку'
    },
    map: {
      title: 'География присутствия',
      regions: 'Регионы деятельности'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      mission: 'Mission',
      projects: 'Projects',
      publications: 'Publications',
      events: 'Events',
      partners: 'Partners',
      contact: 'Contact'
    },
    hero: {
      title: 'Turgay Initiative',
      subtitle: 'Geopolitical platform for sustainable development of Central Asia',
      cta: 'Join our programs'
    },
    stats: {
      countries: 'Partner countries',
      projects: 'Active projects',
      publications: 'Publications',
      events: 'Annual events'
    },
    mission: {
      title: 'Our mission',
      text: 'Promoting sustainable regional development through international cooperation, research and educational initiatives.'
    },
    projects: {
      title: 'Key projects',
      green: {
        title: 'Green Economy of Central Asia',
        desc: 'Development of renewable energy and sustainable resource management'
      },
      digital: {
        title: 'Digital Corridor',
        desc: 'Building trans-regional digital infrastructure'
      },
      education: {
        title: 'Academic Network',
        desc: 'Exchange programs and collaborative research'
      }
    },
    publications: {
      title: 'Recent publications',
      report2024: 'Geopolitical Situation Report 2024',
      water: 'Water Resources of Central Asia',
      trade: 'Trade Routes of the Future'
    },
    form: {
      title: 'Application form',
      name: 'Full name',
      email: 'Email',
      organization: 'Organization',
      program: 'Select program',
      programs: {
        research: 'Research Program',
        exchange: 'Exchange Program',
        consulting: 'Consulting'
      },
      message: 'Cover letter',
      submit: 'Submit application'
    },
    map: {
      title: 'Geographic presence',
      regions: 'Activity regions'
    }
  },
  kz: {
    nav: {
      home: 'Басты бет',
      about: 'Біз туралы',
      mission: 'Миссия',
      projects: 'Жобалар',
      publications: 'Басылымдар',
      events: 'Іс-шаралар',
      partners: 'Серіктестер',
      contact: 'Байланыс'
    },
    hero: {
      title: 'Торғай бастамасы',
      subtitle: 'Орталық Азияның тұрақты дамуы үшін геосаяси алаң',
      cta: 'Бағдарламаларға қосылу'
    },
    stats: {
      countries: 'Серіктес елдер',
      projects: 'Белсенді жобалар',
      publications: 'Басылымдар',
      events: 'Жылдық іс-шаралар'
    },
    mission: {
      title: 'Біздің миссиямыз',
      text: 'Халықаралық ынтымақтастық, ғылыми зерттеулер және білім беру бастамалары арқылы өңірдің тұрақты дамуына жәрдемдесу.'
    },
    projects: {
      title: 'Негізгі жобалар',
      green: {
        title: 'Орталық Азияның жасыл экономикасы',
        desc: 'Жаңартылатын энергетиканы және табиғатты тұрақты пайдалануды дамыту'
      },
      digital: {
        title: 'Цифрлық дәліз',
        desc: 'Трансөңірлік цифрлық инфрақұрылым құру'
      },
      education: {
        title: 'Академиялық желі',
        desc: 'Алмасу бағдарламалары және бірлескен зерттеулер'
      }
    },
    publications: {
      title: 'Соңғы басылымдар',
      report2024: 'Геосаяси жағдай туралы есеп 2024',
      water: 'Орталық Азияның су ресурстары',
      trade: 'Болашақтың сауда жолдары'
    },
    form: {
      title: 'Қатысу өтінімі',
      name: 'Толық аты-жөні',
      email: 'Email',
      organization: 'Ұйым',
      program: 'Бағдарламаны таңдаңыз',
      programs: {
        research: 'Зерттеу бағдарламасы',
        exchange: 'Алмасу бағдарламасы',
        consulting: 'Консалтинг'
      },
      message: 'Сүйемелдеу хаты',
      submit: 'Өтінімді жіберу'
    },
    map: {
      title: 'Географиялық қамту',
      regions: 'Қызмет өңірлері'
    }
  }
};

const Index = () => {
  const [lang, setLang] = useState<Language>('ru');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    program: '',
    message: ''
  });

  const t = translations[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(lang === 'ru' ? 'Заявка отправлена!' : lang === 'en' ? 'Application submitted!' : 'Өтінім жіберілді!');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Globe" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">{t.hero.title}</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.home}</a>
            <a href="#mission" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.mission}</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.projects}</a>
            <a href="#publications" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.publications}</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant={lang === 'ru' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLang('ru')}
              className="w-12"
            >
              RU
            </Button>
            <Button
              variant={lang === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLang('en')}
              className="w-12"
            >
              EN
            </Button>
            <Button
              variant={lang === 'kz' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLang('kz')}
              className="w-12"
            >
              KZ
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/6185a00f-cb89-482f-9928-adcd125047a1/files/f440fa61-198d-4c2b-a471-c508fb2f262c.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t.hero.subtitle}</p>
            <Button size="lg" className="text-lg px-8">
              {t.hero.cta}
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: '12', label: t.stats.countries },
              { value: '45', label: t.stats.projects },
              { value: '180', label: t.stats.publications },
              { value: '60', label: t.stats.events }
            ].map((stat, i) => (
              <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Icon name="Target" className="h-8 w-8 text-primary" />
                {t.mission.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{t.mission.text}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.projects.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'Leaf', color: 'text-green-600', ...t.projects.green },
              { icon: 'Network', color: 'text-blue-600', ...t.projects.digital },
              { icon: 'GraduationCap', color: 'text-purple-600', ...t.projects.education }
            ].map((project, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={project.icon as any} className={`h-12 w-12 mb-4 ${project.color}`} />
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.map.title}</h2>
          <div className="max-w-5xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/6185a00f-cb89-482f-9928-adcd125047a1/files/6d060ed9-fd2b-4dea-9431-c96ac47c818a.jpg"
              alt="Geographic presence map"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Казахстан', 'Узбекистан', 'Кыргызстан', 'Туркменистан', 'Таджикистан', 'Монголия', 'Азербайджан', 'Турция'].map((region, i) => (
                <Badge key={i} variant="secondary" className="justify-center py-2 bg-background/10">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  {region}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="publications" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.publications.title}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: t.publications.report2024, type: 'PDF', pages: 124, year: 2024 },
              { title: t.publications.water, type: 'PDF', pages: 86, year: 2024 },
              { title: t.publications.trade, type: 'PDF', pages: 95, year: 2023 }
            ].map((pub, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Icon name="FileText" className="h-10 w-10 text-accent" />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{pub.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {pub.type} · {pub.pages} стр. · {pub.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="Send" className="h-7 w-7 text-primary" />
                  {t.form.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder={t.form.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t.form.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder={t.form.organization}
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Select value={formData.program} onValueChange={(value) => setFormData({ ...formData, program: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.form.program} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="research">{t.form.programs.research}</SelectItem>
                        <SelectItem value="exchange">{t.form.programs.exchange}</SelectItem>
                        <SelectItem value="consulting">{t.form.programs.consulting}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Textarea
                      placeholder={t.form.message}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    {t.form.submit}
                    <Icon name="Send" className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Globe" className="h-6 w-6" />
                <span className="font-bold">{t.hero.title}</span>
              </div>
              <p className="text-sm opacity-80">{t.hero.subtitle}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.nav.about}</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#mission" className="hover:opacity-100">{t.nav.mission}</a></li>
                <li><a href="#projects" className="hover:opacity-100">{t.nav.projects}</a></li>
                <li><a href="#publications" className="hover:opacity-100">{t.nav.publications}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.nav.contact}</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@turgay-initiative.org
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  Астана, Казахстан
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{lang === 'ru' ? 'Социальные сети' : lang === 'en' ? 'Social media' : 'Әлеуметтік желілер'}</h3>
              <div className="flex gap-4">
                <Icon name="Linkedin" className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Twitter" className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Facebook" className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/20 text-center text-sm opacity-60">
            © 2024 {t.hero.title}. {lang === 'ru' ? 'Все права защищены' : lang === 'en' ? 'All rights reserved' : 'Барлық құқықтар қорғалған'}.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
