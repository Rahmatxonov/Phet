import { Simulation } from '../types';

export const simulations: Simulation[] = [
  {
    id: 'kepler-laws',
    title: 'Kepler qonunlari',
    description:
      "Kepler qonunlarini interaktiv tarzda o'rganish imkonini beradi. Planetalarning quyosh atrofida aylanishini kuzating.",
    imageUrl:
      'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/keplers-laws/latest/keplers-laws_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'sound-waves',
    title: "Ovoz To'lqinlari",
    description:
      "Ovoz to'lqinlarining tarqalishi va xususiyatlarini o'rganish uchun simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/waves-intro/latest/waves-intro_uz.html',
    type: 'Interaktiv',
    categories: ['waves'],
  },
  {
    id: 'my-solar-system',
    title: 'Mening Quyosh Tizimim',
    description:
      "O'z quyosh tizimingizni yarating va gravitatsiya ta'sirida jismlarning harakatini kuzating.",
    imageUrl:
      'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'geometric-optics-basics',
    title: 'Geometrik Optika: Asoslar',
    description:
      "Linzalar va ko'zgularda nurlarning yo'nalishini o'rganish uchun asosiy simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1576319155264-99536e0be1ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/geometric-optics-basics/latest/geometric-optics-basics_uz.html',
    type: 'Interaktiv',
    categories: ['light'],
  },
  {
    id: 'geometric-optics',
    title: 'Geometrik optika',
    description:
      "Geometrik optikaning kengaytirilgan versiyasi, murakkab optik tizimlarni o'rganish imkonini beradi.",
    imageUrl:
      'https://images.unsplash.com/photo-1617839647877-5df1b18be0d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_uz.html',
    type: 'Interaktiv',
    categories: ['light'],
  },
  {
    id: 'density',
    title: 'Zichlik',
    description:
      "Turli moddalarning zichligini o'rganish va ularning suvda cho'kishi yoki suzishini kuzatish.",
    imageUrl:
      'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/density/latest/density_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'circuit-construction-ac',
    title: 'Elektr sxemasi: "O\'zgaruvchan tok"',
    description:
      "O'zgaruvchan tok zanjirlarini qurish va ularning ishlashini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_uz.html',
    type: 'Laboratoriya',
    categories: ['electricity'],
  },
  {
    id: 'normal-modes',
    title: 'Odatiy Modalar',
    description:
      "Tebranuvchi tizimlardagi normal modalarni o'rganish uchun simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1544516229-4056a1d92071?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/normal-modes/latest/normal-modes_uz.html',
    type: 'Interaktiv',
    categories: ['waves', 'mechanics'],
  },
  {
    id: 'fourier-wave-making',
    title: "Furye: to'lqinlarni yaratish",
    description:
      "Furye qatorlari yordamida turli shakldagi to'lqinlarni yaratish va tahlil qilish.",
    imageUrl:
      'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves_uz.html',
    type: 'Interaktiv',
    categories: ['waves', 'mechanics'],
  },
  {
    id: 'collision-lab',
    title: 'Laratoriya:"To\'qnashuv"',
    description:
      "Jismlarning to'qnashuvini o'rganish va energiya saqlanish qonunlarini tekshirish.",
    imageUrl:
      'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/collision-lab/latest/collision-lab_uz.html',
    type: 'Laboratoriya',
    categories: ['mechanics'],
  },
  {
    id: 'energy-skate-park',
    title: 'Skeyt parkda energiya',
    description:
      "Skeytbordchining harakati misolida energiyaning saqlanish qonunini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'vector-addition',
    title: "Vektorni qo'shish",
    description:
      "Vektorlarni qo'shish va ayirish amallarini o'rganish uchun interaktiv simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'gravity-force-lab-basics',
    title: 'Tortishish kuchi: Asosiy tushunchalar',
    description:
      "Gravitatsion o'zaro ta'sirni o'rganish va gravitatsiya kuchini hisoblash.",
    imageUrl:
      'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/gravity-force-lab-basics/latest/gravity-force-lab-basics_uz.html',
    type: 'Laboratoriya',
    categories: ['mechanics'],
  },
  {
    id: 'waves-intro',
    title: "To'lqinlar:Kirish",
    description:
      "To'lqinlarning asosiy xususiyatlari va turlarini o'rganish uchun kirish simulyatsiyasi.",
    imageUrl:
      'https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/waves-intro/latest/waves-intro_uz.html',
    type: 'Interaktiv',
    categories: ['waves'],
  },
  {
    id: 'diffusion',
    title: 'Diffuziya',
    description:
      "Diffuziya jarayonini molekulyar darajada kuzatish va o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_uz.html',
    type: 'Interaktiv',
    categories: ['heat'],
  },
  {
    id: 'gases-intro',
    title: 'Gazlar:Kirish',
    description:
      "Gazlarning asosiy xususiyatlari va qonunlarini o'rganish uchun kirish simulyatsiyasi.",
    imageUrl:
      'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/gases-intro/latest/gases-intro_uz.html',
    type: 'Interaktiv',
    categories: ['heat'],
  },
  {
    id: 'gas-properties',
    title: 'Gaz xossalari',
    description:
      "Gazlarning xossalarini va ularning o'zgarishini kuzatish uchun simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1581093458791-9d15c4a6f792?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_uz.html',
    type: 'Interaktiv',
    categories: ['heat'],
  },
  {
    id: 'blackbody-spectrum',
    title: 'Absolyut qora jism nurlanish spektori',
    description:
      "Absolyut qora jism nurlanish spektrini va uning haroratga bog'liqligini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/blackbody-spectrum/latest/blackbody-spectrum_uz.html',
    type: 'Interaktiv',
    categories: ['heat', 'quantum'],
  },
  {
    id: 'masses-and-springs-basics',
    title: 'Prujinali mayatnik: Asosiy tushunchalar',
    description:
      "Prujinali mayatnikning tebranishlarini va unga ta'sir etuvchi kuchlarni o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1612521564730-95e6eaa39587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/masses-and-springs-basics/latest/masses-and-springs-basics_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'energy-forms-and-changes',
    title: "Energiya turlari va shaklining o'zgarishi",
    description:
      "Energiyaning turli shakllarini va ularning bir-biriga aylanishini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_uz.html',
    type: 'Interaktiv',
    categories: ['heat', 'mechanics'],
  },
  {
    id: 'wave-interference',
    title: "To'lqin interferensiyasi",
    description:
      "To'lqinlarning interferensiyasini va diffraktsiyasini o'rganish uchun simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1551021794-03be4ddaf67d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_uz.html',
    type: 'Interaktiv',
    categories: ['waves'],
  },
  {
    id: 'coulombs-law',
    title: 'Kulon qonuni',
    description:
      "Elektr zaryadlari orasidagi o'zaro ta'sir kuchini o'rganish uchun simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/coulombs-law/latest/coulombs-law_uz.html',
    type: 'Interaktiv',
    categories: ['electricity'],
  },
  {
    id: 'masses-and-springs',
    title: 'Prujinaga osilgan jism tebranishlari',
    description:
      "Prujinaga osilgan jismning tebranishlarini va energiya o'zgarishlarini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1569163139599-0f4517e36f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/masses-and-springs/latest/masses-and-springs_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'capacitor-lab-basics',
    title: 'Kondensatorlar. Asosiy tushunchalar',
    description:
      "Kondensatorlarning ishlash prinsipi va xususiyatlarini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1597738924857-9dd0d2e3d3b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/capacitor-lab-basics/latest/capacitor-lab-basics_uz.html',
    type: 'Laboratoriya',
    categories: ['electricity'],
  },
  {
    id: 'circuit-construction-dc-virtual-lab',
    title: "Elektr zanjirlarni yig'ish:o'zgarmas tok - Virtual laboratoriya",
    description:
      "O'zgarmas tok zanjirlarini yig'ish va ularning ishlashini o'rganish uchun virtual laboratoriya.",
    imageUrl:
      'https://images.unsplash.com/photo-1581092921461-39b21c5c7c4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_uz.html',
    type: 'Laboratoriya',
    categories: ['electricity'],
  },
  {
    id: 'circuit-construction-dc',
    title: "Elektr zanjirini yig'ish:O'zgarmas tok",
    description:
      "O'zgarmas tok zanjirlarini yig'ish va ularning ishlashini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_uz.html',
    type: 'Interaktiv',
    categories: ['electricity'],
  },
  {
    id: 'pendulum-lab',
    title: 'Matematik mayatnik',
    description:
      "Matematik mayatnikning tebranishlarini va unga ta'sir etuvchi omillarni o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_uz.html',
    type: 'Laboratoriya',
    categories: ['mechanics'],
  },
  {
    id: 'projectile-motion',
    title: 'Gorizontga burchak ostida otilgan jism harakati',
    description:
      "Gorizontga burchak ostida otilgan jismning harakatini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1521405305633-c75900143740?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'states-of-matter-basics',
    title: 'Moddalarning agregat holatlari:Asosiy tushunchalar',
    description:
      "Moddalarning turli agregat holatlarini va ularning o'zgarishini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_uz.html',
    type: 'Interaktiv',
    categories: ['heat'],
  },
  {
    id: 'states-of-matter',
    title: 'Moddaning agregat holatlari',
    description:
      "Moddaning agregat holatlarini va fazaviy o'tishlarni molekulyar darajada o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_uz.html',
    type: 'Interaktiv',
    categories: ['heat'],
  },
  {
    id: 'gravity-and-orbits',
    title: 'Gravitatsiya va orbitalar',
    description:
      "Gravitatsiya ta'sirida osmon jismlarining harakatini va orbitalarini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'rutherford-scattering',
    title: 'Rezerford sochilishi',
    description:
      "Rezerford tajribasini simulyatsiya qilish va atom tuzilishini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/rutherford-scattering/latest/rutherford-scattering_uz.html',
    type: 'Interaktiv',
    categories: ['quantum'],
  },
  {
    id: 'bending-light',
    title: "Yorug'likning sinishi",
    description:
      "Yorug'likning sinishi va qaytishi hodisalarini o'rganish uchun simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1576319155264-99536e0be1ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_uz.html',
    type: 'Interaktiv',
    categories: ['light'],
  },
  {
    id: 'hookes-law',
    title: 'Guk qonuni',
    description:
      "Guk qonunini va prujinaning elastiklik xususiyatlarini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1569163139599-0f4517e36f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/hookes-law/latest/hookes-law_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'molecules-and-light',
    title: "Molekulalar va yorug'lik",
    description:
      "Molekulalar va yorug'lik orasidagi o'zaro ta'sirni o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1576319155264-99536e0be1ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/molecules-and-light/latest/molecules-and-light_uz.html',
    type: 'Interaktiv',
    categories: ['light', 'quantum'],
  },
  {
    id: 'energy-skate-park-basics',
    title: 'Skeyt parkda energiya: Asosiy tushunchalar',
    description:
      "Energiyaning saqlanish qonunini o'rganish uchun asosiy simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'faradays-law',
    title: 'Faradey qonuni',
    description:
      "Elektromagnit induksiya hodisasini va Faradey qonunini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_uz.html',
    type: 'Interaktiv',
    categories: ['electricity'],
  },
  {
    id: 'wave-on-a-string',
    title: "Arqondagi to'lqin",
    description:
      "Arqondagi to'lqinning tarqalishini va xususiyatlarini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_uz.html',
    type: 'Interaktiv',
    categories: ['waves'],
  },
  {
    id: 'color-vision',
    title: "Rangli ko'rish",
    description:
      "Ranglarning qo'shilishi va rangli ko'rish mexanizmini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/color-vision/latest/color-vision_uz.html',
    type: 'Interaktiv',
    categories: ['light'],
  },
  {
    id: 'balancing-act',
    title: 'Muvozanatlash',
    description:
      "Richagning muvozanat shartlarini va momentlar qonunini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1535813547-99c456a41d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'under-pressure',
    title: 'Bosim ostida',
    description:
      "Suyuqlik va gazlardagi bosimni va uning chuqurlikka bog'liqligini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1581093458791-9d15c4a6f792?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'friction',
    title: 'Ishqalanish',
    description:
      "Ishqalanish kuchini va uning turlarini o'rganish uchun simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/friction/latest/friction_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'forces-and-motion-basics',
    title: 'Kuchlar va harakat:Asosiy tushunchalar',
    description:
      "Kuchlar va harakatning asosiy qonunlarini o'rganish uchun simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'john-travoltage',
    title: 'John Travoltage',
    description:
      "Statik elektr hodisasini o'rganish uchun qiziqarli simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_uz.html',
    type: 'Interaktiv',
    categories: ['electricity'],
  },
  {
    id: 'gravity-force-lab-advanced',
    title: 'Tortishish kuchi.',
    description:
      "Gravitatsion o'zaro ta'sirni va gravitatsiya kuchini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/gravity-force-lab/latest/gravity-force-lab_uz.html',
    type: 'Laboratoriya',
    categories: ['mechanics'],
  },
  {
    id: 'balloons-and-static-electricity',
    title: 'Sharlar va zaryadlar',
    description:
      "Statik elektr hodisasini va zaryadlarning o'zaro ta'sirini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity_uz.html',
    type: 'Interaktiv',
    categories: ['electricity'],
  },
  {
    id: 'ohms-law',
    title: 'Zanjirning bir qismi uchun Om qonuni',
    description:
      "Om qonunini va elektr zanjirining asosiy parametrlarini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_uz.html',
    type: 'Interaktiv',
    categories: ['electricity'],
  },
  {
    id: 'resistance-in-a-wire',
    title: "O'tkazgichning qarshiligi",
    description:
      "O'tkazgichning qarshiligini va unga ta'sir etuvchi omillarni o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/resistance-in-a-wire/latest/resistance-in-a-wire_uz.html',
    type: 'Interaktiv',
    categories: ['electricity'],
  },
  {
    id: 'build-an-atom',
    title: 'Atom modeli',
    description:
      "Atomning tuzilishini va izotoplarni o'rganish uchun simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_uz.html',
    type: 'Interaktiv',
    categories: ['quantum'],
  },
  {
    id: 'buoyancy-basics',
    title: 'Arximed kuchi: Asoslar',
    description: "Arximed kuchini va jismlarning suzish shartlarini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/buoyancy-basics/latest/buoyancy-basics_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'buoyancy',
    title: 'Arximed kuchi',
    description:
      "Arximed kuchini va uning qo'llanilishini chuqurroq o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/buoyancy/latest/buoyancy_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
  {
    id: 'generator',
    title: 'Generator',
    description:
      "Elektr generatorining ishlash prinsipini va elektromagnit induksiyani o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/generator/latest/generator_uz.html',
    type: 'Interaktiv',
    categories: ['electricity'],
  },
  {
    id: 'magnets-and-electromagnets',
    title: 'Magnitlar va elektromagnitlar',
    description: "Magnitlar va elektromagnitlarning xususiyatlarini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/magnets-and-electromagnets/latest/magnets-and-electromagnets_uz.html',
    type: 'Interaktiv',
    categories: ['electricity'],
  },
  {
    id: 'magnet-and-compass',
    title: 'Magnit va kompas',
    description: "Magnit maydonini va kompasning ishlash prinsipini o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/magnet-and-compass/latest/magnet-and-compass_uz.html',
    type: 'Interaktiv',
    categories: ['electricity'],
  },
  {
    id: 'faradays-electromagnetic-lab',
    title: 'Faradey elektromagnit laboratoriyasi',
    description:
      "Elektromagnit induksiya hodisasini va Faradey qonunini chuqurroq o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/faradays-electromagnetic-lab/latest/faradays-electromagnetic-lab_uz.html',
    type: 'Laboratoriya',
    categories: ['electricity'],
  },
  {
    id: 'projectile-data-lab',
    title: "Proyektil ma'lumotlar laboratoriyasi",
    description:
      "Proyektil harakatini o'rganish va ma'lumotlarni tahlil qilish.",
    imageUrl:
      'https://images.unsplash.com/photo-1521405305633-c75900143740?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/projectile-data-lab/latest/projectile-data-lab_uz.html',
    type: 'Laboratoriya',
    categories: ['mechanics'],
  },
  {
    id: 'charges-and-fields',
    title: 'Zaryadlar va Maydonlar',
    description:
      "Elektr zaryadlari va ularning maydonlarini o'rganish uchun simulyatsiya.",
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_uz.html',
    type: 'Interaktiv',
    categories: ['electricity'],
  },
  {
    id: 'atomic-interactions',
    title: "Atomlarning o'zaro ta'siri",
    description:
      "Atomlar orasidagi o'zaro ta'sirni va bog'lanishlarni o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/atomic-interactions/latest/atomic-interactions_uz.html',
    type: 'Interaktiv',
    categories: ['quantum'],
  },
  {
    id: 'plinko-probability',
    title: 'Plino ehtimoli',
    description:
      "Ehtimollik nazariyasini va statistik taqsimotlarni o'rganish.",
    imageUrl:
      'https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://phet.colorado.edu/sims/html/plinko-probability/latest/plinko-probability_uz.html',
    type: 'Interaktiv',
    categories: ['mechanics'],
  },
];
