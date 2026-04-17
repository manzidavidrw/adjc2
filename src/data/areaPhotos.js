import sexual from '../assets/sexual.jpg'
import gbv from '../assets/GBV.jpg'
import equality from '../assets/equality.jpg'
import community from '../assets/community.jpg'
import economic from '../assets/economic.jpg'
import protection from '../assets/protection.jpg'
import interp from '../assets/interp.jpg'
import education from '../assets/education.jpg'
import sewing from '../assets/sewing.jpg'
import skills from '../assets/skills.jpeg'
import sante from '../assets/sante.jpeg'
import trainings from '../assets/trainings.jpeg'
import financial from '../assets/financial.jpeg'
import market from '../assets/market.jpeg'
import paix from '../assets/paix.jpeg'
import paix2 from '../assets/paix2.jpeg'
import civic from '../assets/civic.jpeg'
import prevention from '../assets/prevention.jpeg'
import cohesion from '../assets/cohesion.jpeg'
import leadership from '../assets/leadership.jpeg'
import sensibilization from '../assets/sensibilization.jpeg'
import initiative from '../assets/initiative.jpeg'
import durable from '../assets/durable.jpeg'
import green from '../assets/green.jpeg'
import jeune from '../assets/jeune.jpeg'
import research from '../assets/research.jpeg'
import preve from '../assets/preuve.jpeg'
import appre from '../assets/appre.jpeg'
import suivant from '../assets/suivant.jpeg'
import change from '../assets/change.jpeg'
import last from '../assets/last.jpeg'

export const AREA_PHOTOS = {
  'srhr-education-adolescents': gbv,
  'srhr-menstrual-health': skills,
  'srhr-gbv-prevention': sexual,
  'srhr-health-services': sante,
  'srhr-gender-equality': equality,
  'srhr-community-engagement': community,
  'enterprise-training': trainings,
  'enterprise-talent': sewing,
  'enterprise-startup': interp,
  'enterprise-financial-literacy': financial,
  'enterprise-markets': market,
  'enterprise-inclusion': economic,
  'peace-participation': paix,
  'peace-conflict-prevention': paix2,
  'peace-civic-education': civic,
  'peace-extremism-prevention': prevention,
  'peace-social-cohesion': cohesion,
  'peace-leadership': leadership,
  'climate-education': sensibilization,
  'climate-adaptation': initiative,
  'climate-natural-resources': durable,
  'climate-green-skills': green,
  'climate-reforestation': protection,
  'climate-advocacy': jeune,
  'research-participatory': research,
  'research-evidence-advocacy': preve,
  'research-learning': appre,
  'research-monitoring': suivant,
  'research-transformative': change,
  'research-amplify-voices': last,
}

export const FALLBACK_PHOTO = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=75'

export function getAreaPhoto(slug) {
  return AREA_PHOTOS[slug] ?? FALLBACK_PHOTO
}
