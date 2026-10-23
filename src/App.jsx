import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  MessageCircle, 
  Zap, 
  Activity, 
  MapPin, 
  Flame, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  TrendingUp,
  Award,
  HeartPulse,
  Cookie,
  X
} from 'lucide-react';

// =========================================================================
// CONFIGURACIÓN DE CONTACTO FRANK FERNÁNDEZ:
// Número oficial de WhatsApp: +34 634 477 412
// =========================================================================
const WHATSAPP_PHONE = '34634477412';

const createWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export default function App() {
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('frank_cookie_consent');
    if (!consent) {
      setShowCookies(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('frank_cookie_consent', 'accepted');
    setShowCookies(false);
  };

  const defaultWhatsAppMsg = "Hola Frank, he visto tu perfil en TikTok y me gustaría recibir información para mejorar mi condición física y nutrición con tu método.";

  const services = [
    {
      id: 1,
      badge: "Madrid & Alrededores",
      badgeHighlight: true,
      title: "Entrenamiento Personal Presencial",
      image: "/images/service_presencial.jpg",
      description: "Sesiones exclusivas 1 a 1 en Madrid. Corrección técnica directa, adaptación a tu nivel y máxima seguridad para progresar sin riesgo de lesiones.",
      features: [
        "Ajuste postural y biomecánica en cada ejercicio",
        "Entrenamiento en gimnasio o a domicilio",
        "Atención 100% individualizada y en directo"
      ],
      whatsappMsg: "Hola Frank, me gustaría consultar disponibilidad para tus entrenamientos presenciales en Madrid."
    },
    {
      id: 2,
      badge: "Toda España • Online",
      badgeHighlight: false,
      title: "Coaching Online & Rutinas a Medida",
      image: "/images/service_online.jpg",
      description: "Planificación de entrenamiento personalizada a tus horarios y equipamiento, con seguimiento continuo y resolución de dudas directo por WhatsApp conmigo.",
      features: [
        "Rutinas explicadas paso a paso con vídeos",
        "Ajustes periódicos según tus progresos",
        "Contacto directo sin intermediarios ni bots"
      ],
      whatsappMsg: "Hola Frank, quiero empezar tu asesoramiento online desde cualquier punto de España. ¿Cómo funciona?"
    },
    {
      id: 3,
      badge: "Nutrición Saludable",
      badgeHighlight: false,
      title: "Nutrición Deportiva & Recomposición",
      image: "/images/service_nutricion.jpg",
      description: "Pautas de alimentación realistas y sostenibles. Aprende a nutrirte para perder grasa o ganar masa muscular sin pasar hambre ni renunciar a tu vida social.",
      features: [
        "Planes flexibles basados en alimentos reales",
        "Cálculo adaptado a tu gasto energético",
        "Educación nutricional para mantener resultados"
      ],
      whatsappMsg: "Hola Frank, quiero mejorar mi alimentación y recomposición corporal. ¿Podrías informarme sobre tus planes de nutrición?"
    },
    {
      id: 4,
      badge: "Salud & Prevención",
      badgeHighlight: true,
      title: "Salud Postural & Prevención de Lesiones",
      image: "/images/service_biometria.jpg",
      description: "Diseñado para combatir el sedentarismo y el trabajo de oficina. Fortalece la musculatura estabilizadora y alivia dolores de espalda, cuello y articulaciones.",
      features: [
        "Ejercicios específicos de movilidad y core",
        "Corrección de descompensaciones posturales",
        "Readaptación tras molestias o inactividad"
      ],
      whatsappMsg: "Hola Frank, paso muchas horas sentado y tengo molestias. Me gustaría enfocarme en salud postural y prevención de dolores."
    },
    {
      id: 5,
      badge: "Disciplina & Artes Marciales",
      badgeHighlight: false,
      title: "Acondicionamiento & Artes Marciales",
      image: "/images/service_coaching.jpg",
      description: "Aprovecha mis más de 20 años como profesor de artes marciales: agilidad, reflejos, fuerza funcional, resistencia y una mentalidad a prueba de excusas.",
      features: [
        "Fuerza funcional y coordinación corporal",
        "Desarrollo de disciplina y control del estrés",
        "Entrenamientos dinámicos y motivantes"
      ],
      whatsappMsg: "Hola Frank, me atrae tu faceta de artes marciales y acondicionamiento físico. ¿Podrías darme detalles?"
    },
    {
      id: 6,
      badge: "Método 360 • Más Completo",
      badgeHighlight: true,
      title: "Programa Integral Frank Sport Tech",
      image: "/images/service_transformacion.jpg",
      description: "El programa integral definitivo: Entrenamiento + Nutrición deportiva + Prevención activa + Coaching motivacional con comunicación prioritaria diaria.",
      features: [
        "Acompañamiento integral cuerpo y mente",
        "Seguimiento estrecho de evolución y hábitos",
        "Atención prioritaria y soporte continuo"
      ],
      whatsappMsg: "Hola Frank, busco una transformación integral con tu Programa 360 Frank Sport Tech. ¿Cómo podemos agendar la primera sesión?"
    }
  ];

  return (
    <div className="landing-container">
      {/* 1. TOP NAVIGATION / APP BAR */}
      <header className="top-nav">
        <div className="brand-badge">
          <div className="brand-icon">
            <Zap size={18} strokeWidth={2.5} />
          </div>
          <div className="brand-name">
            FRANK <span>SPORT TECH</span>
          </div>
        </div>

        <div className="nav-status">
          <span className="live-dot"></span>
          <span>Plazas activas • Madrid & Online</span>
        </div>

        <a 
          href={createWhatsAppLink(defaultWhatsAppMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta-btn"
          aria-label="Contactar con Frank Fernández por WhatsApp"
        >
          <MessageCircle size={16} />
          <span>Contactar</span>
        </a>
      </header>

      {/* 2. HERO IMAGE FULL-WIDTH (Edge-to-Edge) */}
      <section className="hero-wrapper" aria-label="Frank Sport Tech - Fotografía Deportiva">
        <div className="hero-image-container">
          <img 
            src="/images/hero.jpg" 
            alt="Frank Fernández - Entrenador Personal en Madrid y Nutricionista Deportivo" 
            className="hero-img"
            loading="eager"
          />
          <div className="hero-overlay-top"></div>
          <div className="hero-overlay-bottom"></div>

          {/* Floating Badges */}
          <div className="hero-floating-badges">
            <div className="hero-pill highlight">
              <Award size={14} />
              <span>+20 Años de Experiencia</span>
            </div>
            <div className="hero-pill">
              <MapPin size={14} />
              <span>Madrid & Alrededores</span>
            </div>
            <div className="hero-pill">
              <Activity size={14} />
              <span>Online Toda España</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. H1 & HUMANIZED BIO (SEO-OPTIMIZED) */}
      <main className="bio-section">
        <div className="tiktok-source-tag">
          <Flame size={14} className="neon-text" />
          <span>Comunidad TikTok • <strong>@franksporttech</strong></span>
        </div>

        <h1 className="main-h1">
          <span className="trainer-name">FRANK FERNÁNDEZ</span>
          <span className="brand-subtitle">Frank Sport Tech</span>
          <span className="main-h1-sub">
            Entrenador Personal en Madrid & Asesor Nutricional Online
          </span>
        </h1>

        <p className="bio-description">
          ¡Hola! Soy <strong>Frank Fernández</strong>, entrenador personal, nutricionista deportivo, coach y profesor de artes marciales con <strong>más de 20 años de trayectoria</strong>. Mi propósito es acompañarte con una metodología cercana y eficaz para <strong>mejorar tu forma física, tu salud y tu bienestar mental</strong>, previniendo los dolores y patologías del sedentarismo con entrenamiento inteligente, hábitos sostenibles y apoyo motivacional constante.
        </p>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">+20</span>
            <span className="stat-label">Años de Trayectoria</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Salud & Prevención</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1 a 1</span>
            <span className="stat-label">Atención Personalizada</span>
          </div>
        </div>

        {/* Main WhatsApp Call to Action */}
        <div className="main-cta-container">
          <a
            href={createWhatsAppLink(defaultWhatsAppMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-main-btn"
            id="hero-whatsapp-cta"
            aria-label="Hablar directamente con Frank por WhatsApp"
          >
            <MessageCircle size={22} />
            <span>Habla Conmigo por WhatsApp</span>
            <ArrowUpRight size={20} />
          </a>
          <p className="cta-subtext">
            <ShieldCheck size={14} className="neon-text" />
            <span>Contacto directo al +34 634 477 412 • Sin compromiso</span>
          </p>
        </div>
      </main>

      {/* 4. 6 SERVICES CARDS GRID */}
      <section className="services-section" id="servicios" aria-label="Servicios de Frank Sport Tech">
        <div className="section-header">
          <span className="section-subtitle-tag">PLANES Y SERVICIOS</span>
          <h2 className="section-title">Elige el Plan que Mejor se Adapte a Ti</h2>
          <p className="section-desc">
            Haz clic en el botón de WhatsApp del servicio que te interese para consultar dudas, horarios o reservar tu plaza.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              {/* Card Image with Title Overlay */}
              <div className="card-image-wrap">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="card-img"
                  loading="lazy"
                />
                <div className="card-img-gradient"></div>

                {/* Badge Top */}
                <div className={`card-badge-top ${service.badgeHighlight ? 'highlight' : ''}`}>
                  <span>{service.badge}</span>
                </div>

                {/* Service Name Overlaid */}
                <div className="card-title-overlay">
                  <h3 className="card-title">{service.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <p className="card-description">{service.description}</p>

                {/* Key Features List */}
                <ul className="card-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="card-feature-item">
                      <Check size={15} className="card-feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp Action Button */}
                <a
                  href={createWhatsAppLink(service.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-whatsapp-btn"
                  id={`service-cta-${service.id}`}
                  aria-label={`Consultar ${service.title} por WhatsApp`}
                >
                  <MessageCircle size={18} />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            FRANK <span>SPORT TECH</span>
          </div>
          <p className="footer-trainer-title">
            Frank Fernández • Entrenador Personal & Nutricionista Deportivo
          </p>
          <p className="footer-tagline">
            Entrenamiento inteligente, salud física y mental, nutrición y prevención de lesiones.
          </p>
          <div className="footer-contact-info">
            <span className="footer-phone">WhatsApp: +34 634 477 412</span>
            <span className="footer-domain">frank-sport-tech.com</span>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Frank Sport Tech. Todos los derechos reservados. Madrid • Toda España.
          </p>
        </div>
      </footer>

      {/* 6. MOBILE BOTTOM STICKY WHATSAPP BAR (Optimized for TikTok) */}
      <aside className="mobile-sticky-bar" aria-label="Acceso Rápido por WhatsApp">
        <div className="sticky-trainer-info">
          <div className="sticky-avatar-icon">
            <Zap size={18} strokeWidth={2.5} />
          </div>
          <div>
            <span className="sticky-name">Frank Fernández</span>
            <span className="sticky-status">
              <span className="live-dot"></span>
              WhatsApp: +34 634 477 412
            </span>
          </div>
        </div>

        <a
          href={createWhatsAppLink(defaultWhatsAppMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-whatsapp-btn"
          id="sticky-whatsapp-button"
          aria-label="Abrir chat de WhatsApp con Frank Fernández"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </aside>

      {/* 7. SIMPLE GDPR COOKIES BANNER */}
      {showCookies && (
        <aside className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
          <div className="cookie-content">
            <Cookie size={20} className="cookie-icon" />
            <p className="cookie-text">
              Utilizamos cookies técnicas para garantizar la mejor experiencia en nuestra web. Al continuar navegando, aceptas su uso.
            </p>
          </div>
          <div className="cookie-actions">
            <button 
              onClick={acceptCookies} 
              className="cookie-accept-btn"
              id="cookie-accept-button"
            >
              Aceptar
            </button>
            <button 
              onClick={acceptCookies} 
              className="cookie-close-btn"
              aria-label="Cerrar aviso de cookies"
            >
              <X size={16} />
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
