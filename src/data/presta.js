const prestaData = [
  {
    id: 1,
    title: "Drainage Lymphatique",
    subtitle: "Maison So Ham, Rennes",
    description:
        "Le drainage lymphatique est un massage doux et rythmé qui vise à stimuler la circulation de la lymphe, un liquide essentiel au bon fonctionnement de notre système immunitaire et à l’élimination naturelle des toxines. Ce soin, à la fois détoxifiant, apaisant et revitalisant, permet de retrouver une sensation de légèreté et d’équilibre, aussi bien physique que mental.",
    deroulement: 
        "Chaque séance débute par un temps d’échange afin de comprendre vos besoins et vos éventuelles sensibilités (rétention d’eau, fatigue, jambes lourdes, ballonnements, etc. Vous êtes ensuite confortablement installé·e sur la table de massage, dans une ambiance calme et chaleureuse. Le drainage s’effectue à l’aide de mouvements précis, lents et réguliers, sur l’ensemble du corps ou des zones ciblées selon vos besoins (jambes, ventre, bras, visage…). La méthode que j’utilise, issue de ma formation certifiée Madero France, respecte les principes fondamentaux du drainage lymphatique manuel tout en intégrant une approche moderne et bienveillante du bien-être corporel. Les gestes sont doux mais efficaces, sans douleur, favorisant la circulation lymphatique et la détente du système nerveux.",
    biensfaits: [
        "Détoxifie l’organisme en favorisant l’élimination naturelle des toxines et des déchets métaboliques.",
        "Réduit les gonflements et les sensations de jambes lourdes.",
        "Stimule la circulation sanguine et lymphatique.",
        "Renforce le système immunitaire.",
        "Favorise la récupération musculaire et la détente profonde.",
        "Améliore la qualité de la peau, en réduisant la rétention d’eau et en affinant visiblement la silhouette.",
        "Apaise le mental grâce à des gestes lents, fluides et enveloppants."
    ],
    public: 
        "Ce soin s’adresse à toute personne souhaitant retrouver légèreté et vitalité, soutenir une détox naturelle, préparer ou accompagner une reprise d’activité physique ou simplement prendre un moment pour soi, pour se recentrer et se sentir mieux dans son corps.",
    price: ["55€", "65€", "115€", "125€", "180€"],
    duration: ["40 minutes (face sculpt)", "45/60 minutes (deux parties du corps au choix)", "85 minutes (corps entier)", "100 minutes (corps entier + massage)", "120/135 minutes (corps entier + massage + face sculpt)"],
    cureDiscount: ["255€", "300€", "500€", "560€", "770€"],
    curePrice: ["300€", "350€", "575€", "645€", "900€"], 
    cureDuration: ["40 minutes (face sculpt)", "45/60 minutes (deux parties du corps au choix)", "85 minutes (corps entier)", "100 minutes (corps entier + massage)", "120/135 minutes (corps entier + massage + face sculpt)"],
    images: [
        "/assets/drainage1.webp",
        "/assets/drainage2.webp",
        "/assets/drainage3.webp",
    ],
  },
 {
    id: 2,
    title: "Le Massage Californien",
    subtitle: "Relaxation, Évasion et Bien-Être à Rennes",
    description:
        "Offrir à son corps un moment de détente n’est pas un luxe, c’est une nécessité. Les massages bien-être sont bien plus qu’une simple pause : ils agissent profondément sur votre équilibre physique et émotionnel. Les massages détendent les muscles, libèrent les tensions accumulées, améliorent la circulation sanguine et lymphatique, et stimulent la régénération cellulaire. Résultat ? Une sensation de légèreté, un soulagement durable des douleurs et un regain d’énergie naturelle.  Grâce à des gestes doux et enveloppants, le massage favorise le lâcher-prise, réduit le stress et l’anxiété, et invite à un véritable voyage intérieur. Il aide à calmer le mental, améliorer la qualité du sommeil, et renforcer la connexion corps-esprit. Offrez-vous ce cadeau précieux : un moment suspendu, entièrement dédié à votre bien-être. Que ce soit pour évacuer le stress, retrouver votre vitalité ou simplement vous faire du bien, le massage bien-être est une invitation à la douceur et à la sérénité.",
    deroulement: 
        "Ce massage bien-être se distingue par de longs mouvements lents, harmonieux et enveloppants, réalisés avec des huiles chaudes, sur l’ensemble du corps. Les gestes sont à la fois fluides, profonds ou légers, en fonction de vos besoins et des tensions ressenties. Offrant un véritable moment d’évasion, il permet une reconnexion corps-esprit, un lâcher-prise total, et une relaxation durable. C’est un soin qui invite à revenir à soi, à se recentrer, à retrouver une harmonie intérieure.",
    biensfaits: [
        "Détente musculaire et nerveuse profonde",
        "Libération du stress et des tensions émotionnelles",
        "Amélioration de la circulation sanguine et lymphatique (effet détox)",
        "Sensation d’apaisement, de recentrage et d’enracinement",
        "Stimulation de l’estime de soi grâce à un toucher bienveillant et professionnel",
    ],
    public: 
        "Ce massage est idéal pour toutes les femmes en quête de bien-être, de relaxation, ou d’un moment de pause régénérante. Il convient parfaitement aux personnes stressées, fatiguées, en surcharge émotionnelle, ou simplement désireuses de prendre soin d’elles avec un soin professionnel de qualité.",
    price: ["40€", "70€"],
    duration: ["40 minutes (face dorsale ou ventrale)", "70 minutes (corps entier)"],
    images: [
        "/assets/calif1.webp",
        "/assets/calif2.webp",
        "/assets/calif3.webp",
        "/assets/calif4.webp",
    ],
    coments: [{
        name: "Ines Jauneau",
        content: "Super moment de détente. D’autant plus appréciable avec un corps fatigué par le sport. J’ai redécouvert des zones de mon corps et de nouvelles sensations. Beaucoup de professionnalisme.",
    },
    {
        name: "Sarah DM",
        content: "Une expérience au top ! J’ai ressenti un vrai lâcher prise, et mes tensions se sont envolées. Merci Emma pour ce moment apaisant et cette petite bulle de bien être !",
    },
    {
        name: "Bérénice LH",
        content: "Merci pour ce massage qui m’a fait beaucoup de bien. Tout était parfait, Emma est très professionnelle et à l’écoute, je recommande!!!",
    },
    {
        name: "Annaig Boisard",
        content: "Super moment de détente passé cet après-midi grâce à Emma. Ambiance agréable et relaxante, massage incroyable. Quel bonheur pour le corps et les jambes à J+2 d’un marathon ! Merci beaucoup ☺️",
    },
    {
        name: "Carole G",
        content: "Moment de bien être assuré avec So’Ham massage ! moment extrêmement agréable pour le corps et l’esprit. Elle m’a laissé un petit temps de repos avant de me changer et de me reconnecter “au retour”. Ce temps de reconnexion du corps et de la tête est aussi important. Merci Emma , i loved that !",
    },
    {
        name: "Manon",
        content: "J’ai passé un agréable moment de détente entre les mains expertes d ’Emma. Tout était parfait : ambiance relaxante, plaid chauffant, choix d’huiles aux senteurs délicates ! Je recommande vivement !",
    },
    {
        name: "Anna G",
        content: "C’était un moment de pur plaisir et de détente, idéal pour commencer la semaine. Le massage était doux mais Emma a su aller en profondeur pour dénouer toutes les tensions musculaires sans aucune douleur, un massage idéal pour remettre son corps en forme.",
    },
    {
        name: "Laureline G",
        content: "Emma m’a offert un moment magique. Bienveillante, apaisante, délicate dans ses mouvements. Elle m’a fait oublier mes douleurs liées à ma pathologie. Elle a apaisé mes inflammations, certains maux et j’ai retrouvé de la mobilité. Elle fait tout pour qu’on entre dans une bulle de détente le temps d’un massage. Un moment précieux quand on souffre et je la remercie énormément pour tout.",
    },
    {
        name: "Ambre Lb",
        content: "Merci beaucoup pour ce moment de détente, de m’avoir soulagé mes douleurs, c’était top!",
    },
    {
        name: "Thelma Köhler",
        content: "J’ai passé un super moment avec Emma ! Elle a su me détendre tout en me mettant à l’aise. Elle me reverra très vite sur sa table de massage !",
    },
    {
        name: "Lalie B",
        content: "Massage au top avec Emma ! Très pro, douce et à l’écoute, elle met tout de suite à l’aise. Un vrai moment de détente, je recommande les yeux fermés.",
    },
    {
        name: "Lea M",
        content: "Emma a su me mettre à l’aise. Douceur et quiétude étaient au rendez-vous pour permettre de lâcher prise le temps d’un massage. Une mention spéciale pour le massage plantaire.A refaire ☺️",
    },
    {
        name: "Julie B",
        content: "Un pur moment de détente, les gestes fluides et apaisants m’ont permis de relâcher des tensions accumulées. Je suis ressortie détendue et apaisée. Expérience à reproduire…☺️",
    },
    ],
  },
  {
    id: 3,
    title: "Massage Ayurvédique",
    subtitle: "Un Voyage Intérieur de Détente, de Lâcher-Prise et de Bien-Être",
    description:
        "Issu de l’Ayurvéda, médecine traditionnelle indienne pratiquée depuis plus de 5 000 ans, le massage ayurvédique (Abhyanga) est bien plus qu’un soin corporel : c’est une expérience profonde de lâcher-prise, un rituel de bien-être et de relaxation énergétique, qui vous invite à un voyage intérieur hors du temps. Ce massage complet vous plonge dans une évasion sensorielle unique, où le corps, l’esprit et les émotions se reconnectent en douceur, dans un cadre professionnel et de qualité, au cœur de Rennes. Ce massage bien-être est réalisé avec des huiles tièdes choisies selon votre constitution ayurvédique (dosha) et vos besoins du moment. Les gestes sont rythmés, profonds, intuitifs et enveloppants, avec pour objectif d’harmoniser les énergies du corps tout en stimulant les points vitaux (marmas). Au-delà de la détente musculaire, ce soin agit comme une détox émotionnelle, libérant les tensions profondes, apaisant les mémoires corporelles, et favorisant un ancrage intense dans le moment présent.",
    deroulement: 
        "Ce massage bien-être se distingue par de longs mouvements lents, harmonieux et enveloppants, réalisés avec des huiles chaudes, sur l’ensemble du corps. Les gestes sont à la fois fluides, profonds ou légers, en fonction de vos besoins et des tensions ressenties. Offrant un véritable moment d’évasion, il permet une reconnexion corps-esprit, un lâcher-prise total, et une relaxation durable. C’est un soin qui invite à revenir à soi, à se recentrer, à retrouver une harmonie intérieure.",
    biensfaits: [
        "Libération des blocages émotionnels et mentaux",
        "Réduction de l’anxiété et diminution du stress quotidien",
        "Stimulation de la vitalité et du système nerveux",
        "Rééquilibrage des émotions pour un mieux-être global",
        "Sensation de clarté intérieure, de recentrage et de relaxation profonde",
    ],
    public: 
        "Ce massage est particulièrement recommandé à toute personne en recherche de bien-être, vivant une période de fatigue émotionnelle, de transition personnelle, ou tout simplement désireuse de s’offrir un moment de qualité, de détente profonde et de reconnexion à soi.",
    price: ["45€", "75€"],
    duration: ["40 minutes (face dorsale ou ventrale)", "70 minutes (corps entier)"],
    images: [
        "/assets/vedic1.webp",
        "/assets/vedic2.webp",
        "/assets/vedic3.webp"
    ],
    coments: [{
        name: "Louise Narbonne",
        content: "Emma’ (elle m’a) totalement détendue :) moment hors du temps !",
    },
    {
        name: "Julien Legrand",
        content: "Suite à un week-end intense sur et en dehors du terrain, le travail d'Emma m'a permis de bien me relaxer et de récupérer. 1h10 de plaisir et de détente, pour un bien-être physique et mental !",
    },
    {
        name: "Maiwenn G",
        content: "Emma est très pro, très efficace. Elle met toute son énergie et son savoir-faire dans le massage. Moment de détente et de relaxation assuré. Je recommande à tout mon entourage.",
    },
    {
        name: "Mimi",
        content: "Des massages attentionnés et relaxants à souhait. Une pause magique dans ce monde de brutes. Une expérience agréable à vivre au moins une fois dans sa vie et si possible tous les jours !",
    },
    {
        name: "Clara Lr",
        content: "Fatiguée et plutôt tendue avant de monter sur la table d'Emma ,je suis sortie du massage ayurvédique légère et détendue. Ce temps pour moi m'a permis de lâcher prise. Merci à Emma pour son professionnalisme, sa douceur et ses attentions (musique, plaid chauffant, bougies...) qui permettent une détente optimale. Je recommencerai et très bientôt",
    },
    {
        name: "Rozenn B",
        content: "À l’écoute ! Emma a su s’adapter à mes demandes précises ce qui est très important pour moi. Je recommande",
    },
    {
        name: "Caitlin Lr",
        content: "Emma a minutieusement préparé la pièce : parfum d’ambiance et musique apaisante. Elle m’a bien expliqué les bienfaits du massage ayurvédique. Le massage à été réalisé avec des gestes d’une justesse et fluidité tout en douceur. Cela m’a apporté une détente profonde. Un pur moment de relaxation qui m’a apporté une sensation de bonheur et de bien-être.",
    },
    {
        name: "Mme G",
        content: "Très contente et satisfaite, à refaire avec plaisir. Massage complet en douceur. Emma s’est être à l’écoute et très attentionnée. Un gros merci à toi.",
    },
    {
        name: "Mme Giret",
        content: "Un très bon moment de détente que du bonheurTrès professionnelle.",
    },
    {
        name: "Crystelle B",
        content: "Au lendemain du massage je me sens particulièrement détendue. Emma à réussie à soulager les tensions et douleurs au dos",
    },
    {
        name: "Sébastien",
        content: "Quel exquis interlude de sérénité ! La douceur des gestes d’Emma m’ont permis un abandon total et le relâchement des tensions qui m’habitaient. J’ai redécouvert quiétude et paix le temps d’un instant. Une expérience des sens des plus salutaires, à réitérer assurément. Merci pour ce délicieux moment à très vite.",
    },
    {
        name: "Lison G",
        content: "C’était vraiment relaxant, elle est vraiment à l’écoute et a su adapter la séance à mes besoins. Je me suis sentie tellement bien et détendue. Je recommande vivement milles fois",
    },
    {
        name: "Elise Daunay",
        content: "Quel bon moment ce massage ! j’en ai ressenti les effets pendant plusieurs jours. Merci Emma !",
    },
    {
        name: "Alex B",
        content: "Un pur moment de détente ! Le massage était parfaitement dosé, apaisant. Je suis ressorti totalement relâché.",
    },
    {
        name: "Coralie J",
        content: "Très bon moment de détente avec Emma , qui est très professionnelle et qui prend soin de ses client(e)s. Belle parenthèse 🙏🤩",
    },
    {
        name: "Jordane C",
        content: "Merci pour ce moment particulier qui m’ a permis d’être complètement détendu, tu arrives Emma à mettre à l’aise rapidement et on se laisse transporter pendant toute la durée du massage. Tu m’as appris beaucoup de choses sur le magnétisme et j’ai hâte d’en refaire un nouveau ! À très vite",
    },
    {
        name: "Louise S",
        content: "Hello Emma ! Un petit mot pour encore te remercier pour ce super massage, c’était vraiment relaxant ! J’ai fais une nuit de bébé après ce beau moment !!",
    },
    ]
  },
  {
    id: 4,
    title: "Réflexologie Plantaire",
    subtitle: "Un soin de Détente et de Bien-Être Émotionnel à Rennes.",
    description:
        "La réflexologie plantaire est une technique naturelle et ancestrale, douce mais puissante, qui invite à un véritable voyage intérieur par les pieds. Elle repose sur le principe que chaque zone du pied correspond à un organe, une glande ou une partie du corps. En stimulant ces zones réflexes, cette pratique permet de relancer les fonctions naturelles du corps, mais aussi d’agir en profondeur sur le terrain émotionnel. Dans un cadre professionnel et de qualité, offrez-vous une pause bien-être, une détente physique et mentale, au cœur de Rennes. Le pied est une véritable carte du corps. Grâce à ses milliers de terminaisons nerveuses, il reflète aussi nos tensions intérieures, nos émotions enfouies et nos blocages énergétiques.La réflexologie plantaire permet une libération émotionnelle en douceur, une détox subtile du corps et de l’esprit. Chaque séance devient un moment privilégié de lâcher-prise, de recentrage et de reconnexion à soi, dans une ambiance propice à la relaxation profonde.",
    deroulement: 
        "Venez découvrir un soin professionnel, à la fois subtil et profond, qui agit sur le corps, l’esprit et les émotions. La réflexologie plantaire vous invite à retrouver votre équilibre naturel avec douceur, écoute et bienveillance.",
    biensfaits: [
        "Réduction du stress, de l’anxiété et des troubles du sommeil",
        "Libération émotionnelle naturelle et durable",
        "Apaisement du mental et sentiment de sécurité intérieure",
        "Stimulation des capacités d’auto-régulation du corps (effet détox)",
        "Ancrage, recentrage et retour à l’équilibre émotionnel",
    ],
    public: 
        "La réflexologie plantaire est idéale pour toute personne en quête de détente, de bien-être, ou traversant une période de fatigue nerveuse, de tensions mentales ou de surcharge émotionnelle.",
    price: "40€",
    duration: "35 minutes",
    images: [
        "/assets/reflexo1.webp",
        "/assets/reflexo2.webp",
        "/assets/reflexo3.webp"
    ],
    coments: [{
        name: "Adriel Goodman",
        content: "Expérience super reposante et professionnelle. J’ai ressenti les bienfaits du massage, et la détente plusieurs jours après. Je vais absolument y retourner.",
    },
    {
        name: "Adriel Goodman",
        content: "Expérience super reposante et professionnelle. J’ai ressenti les bienfaits du massage, et la détente plusieurs jours après. Je vais absolument y retourner.",
    },
    {
        name: "Laure L",
        content: "Il y a “massage” et “Massage”, avec Emma c’est du pur bonheur, elle a un don. Cela serait dommage de passer à côté d’un moment d’exception. Encore Merci Emma.",
    },
    {
        name: "Jean Marc Daunay",
        content: "Pour mon anniversaire mon épouse m’a offert un massage californien et une séance de réflexologie et ces expériences ont été tout simplement exceptionnelle. Un grand Merci à Emma pour son professionnalisme, sa bienveillance et son toucher expert. J’en ressors profondément détendu et revitalisé. Une véritable parenthèse de bien-être que je recommande sans hésitation !",
    },
    {
        name: "Lou Meyer",
        content: "J’ai pu découvrir plusieurs techniques de massage différentes et toutes sont très apaisantes. Tout est mis en place par Emma pour passer un vrai moment de détente. Je recommande vivement !",
    },
    {
        name: "Louise Daunay",
        content: "Quel beau moment ! Emma a su trouver les bons points et me détendre de manière douce et relaxante. Je recommande vivement pour passer un moment de détente absolu",
    },
    {
        name: "Juliette Le Roux",
        content: "Un moment de bien-être hors du temps qui m’a permis de lâcher prise sur le stress du quotidien. Je recommande vivement de tester l’aventure avec Emma qui a un don certain",
    },
    ]
  },
  {
    id: 5,
    title: "Amma Assis",
    subtitle: "Une Pause Bien-Être pour la Détente et la Productivité à Rennes.",
    description:
        "Le massage Amma assis est une technique de relaxation rapide, efficace et naturelle, inspirée de la médecine traditionnelle chinoise et développée au Japon. Pratiqué habillé, sur une chaise ergonomique, ce soin court mais ciblé vous offre une véritable pause de lâcher-prise, idéale pour relâcher les tensions physiques, nerveuses et émotionnelles... même au cœur d’une journée chargée. Parfait pour une détente au travail, ce massage vous aide à retrouver énergie, clarté mentale et meilleure productivité, dans un cadre professionnel de qualité, à Rennes centre ou en entreprise.",
    deroulement: 
        "En seulement quelques minutes, le massage Amma assis agit sur les zones de tension les plus sollicitées : le dos, la nuque, les épaules et les bras. Grâce à des gestes précis – pressions, percussions, étirements – il permet un lâcher-prise immédiat et une reconnexion à soi, sans huile et sans nécessité de se déshabiller. C’est une évasion rapide mais puissante, idéale pour intégrer le bien-être dans le quotidien, notamment en entreprise, en open space ou entre deux rendez-vous.",
    biensfaits: [
        "Diminution du stress, de la fatigue nerveuse et mentale",
        "Détente musculaire ciblée et rapide (nuque, dos, épaules)",
        "Clarté mentale et amélioration de la concentration",
        "Sensation de légèreté, de recentrage et de vitalité retrouvée",
        "Harmonisation du Qi (énergie vitale)",
        "Contribution à une meilleure productivité et à un climat de travail apaisé",
    ],
    public: 
        "Le Amma assis est particulièrement recommandé pour : les personnes en situation de stress ou de surmenage, celles et ceux qui souhaitent faire une pause bien-être rapide et efficace, les entreprises soucieuses du bien-être de leurs collaborateurs et toute personne ayant besoin d’une parenthèse au boulot pour retrouver équilibre et dynamisme.",
    price: ["35€", "SUR DEVIS"],
    duration: ["30 minutes", "ENTREPRISE"],
    images: [
        "/assets/amma1.webp"
    ],
    coments: [{
        name: "Roxanne Köhler",
        content: "Massage qui a pu m’apporter un sentiment de bien-être et d’apaisement. Emma a été d’une douceur et d’un professionnalisme remarquable.",
    },
    ]
  },
  {
    id: 6,
    title: "Massage Thaï Traditionnel",
    subtitle: "L’Art du Lâcher-Prise et du Rééquilibrage Énergétique à Rennes",
    description:
        "Le massage thaï traditionnel, ou Nuad Bo-Rarn, est un rituel de soin ancestral, enraciné dans la médecine traditionnelle thaïe. Influencé par les pratiques indiennes, chinoises et bouddhistes, ce massage offre une expérience de bien-être unique, à la fois profonde, méditative et énergisante.",
    deroulement: 
        "Pratiqué au sol, sur futon, et habillé, il combine pressions, étirements doux, mobilisations articulaires et travail énergétique pour favoriser une détente durable, une relaxation du corps, et un réalignement intérieur. Ce massage bien-être agit sur les lignes d’énergie (Sen) pour débloquer la circulation vitale et relancer la fluidité dans le corps et l’esprit. Les mouvements précis, parfois comparés à une “danse à deux”, offrent une sensation d’évasion intérieure, une reconnexion au souffle, et une présence à soi plus consciente et ancrée.",
    biensfaits: [
        "Apaisement des tensions mentales et émotionnelles profondes",
        "Libération des blocages énergétiques et stimulation de la vitalité",
        "Diminution de l’anxiété, de l’agitation et des pensées parasites",
        "Alignement intérieur, clarté mentale et conscience corporelle",
        "Souplesse, détente musculaire et ancrage profond",
        "Une détox énergétique naturelle et durable",
    ],
    public: 
        "Le massage thaï traditionnel est idéal pour les personnes : en recherche d’équilibre physique et émotionnel, soumises au stress, à la fatigue ou à une perte de repères, en quête d’un soin de bien-être authentique, profond et respectueux et désireuses de vivre une expérience de relaxation complète, dans un cadre professionnel de qualité ",
    price: "80€",
    duration: "80 minutes en 5 étapes",
    images: [
        "/assets/thai1.webp",
        "/assets/thai2.webp",
    ],
    coments: [{
        name: "Sonia B",
        content: "Emma est bienveillante, douce, elle m’a aidé à prendre conscience de mon corps et cela fait du bien. J’ai pleuré aussi , relâché des émotions enfouies. Merci Mlle Le Roux.",
    },
    {
        name: "Albane C",
        content: "Un grand merci à Emma pour ce moment de détente !☺️ Elle est très attentive et a pris le temps de travailler sur les points de tension pour me soulager. Je compte reprendre rendez-vous très vite !!",
    },
    {
        name: "Lena P",
        content: "Petit message pour te remercier de la session d’hier soir. C’était très agréable et détente garantie. Vivement la prochaine fois🌸",
    },
    ]
  },
  {
    id: 7,
    title: "Massage Crânien Thaï",
    subtitle: "L’Art du Lâcher-Prise Mental et du Calme Intérieur à Rennes",
    description:
        "Le massage crânien thaï traditionnel est une pratique ancestrale douce et puissante, héritée des soins énergétiques de Thaïlande. En se concentrant sur les zones du crâne, de la nuque, des épaules et du haut du dos, ce soin offre une relaxation profonde, une libération émotionnelle, et une détente mentale immédiate. C’est une parenthèse de bien-être de qualité, idéale pour celles et ceux qui ont besoin de lâcher prise, de soulager la fatigue mentale ou de retrouver leur calme intérieur. Le massage crânien s’appuie sur des pressions ciblées, des lissages circulaires, des mouvements doux, et des stimulations de points énergétiques spécifiques. Il invite le mental à ralentir, à se décharger, et le corps à se régénérer naturellement. Cette évasion sensorielle agit comme une véritable détox émotionnelle, en libérant les tensions invisibles stockées dans le haut du corps, souvent liées au stress, à l’anxiété ou à une charge mentale excessive.",
    deroulement: 
        "Ce massage bien-être est particulièrement adapté à : celles et ceux qui ressentent une fatigue mentale ou une surcharge émotionnelle, Les personnes en quête de paix intérieure, de silence mental ou de récupération profonde et toute personne stressée, tendue, ou souhaitant s'offrir une évasion douce et ressourçante",
    biensfaits: [
        "Apaisement du mental et du système nerveux",
        "Diminution du stress, des insomnies et de la fatigue nerveuse",
        "Libération des tensions émotionnelles dans la tête, la nuque et les épaules",
        "Stimulation de la concentration, de la créativité et de la clarté mentale",
        "Sensation immédiate de relâchement, de légèreté et de recentrage intérieur",
        "Effet détox énergétique, doux mais durable",
    ],
    public: 
        "Ce massage bien-être est particulièrement adapté à : celles et ceux qui ressentent une fatigue mentale ou une surcharge émotionnelle, les personnes en quête de paix intérieure, de silence mental ou de récupération profonde et toute personne stressée, tendue, ou souhaitant s'offrir une évasion douce et ressourçante.",
    price: ["50€", "80€"],
    duration: ["40 minutes (crânial)", "75 minutes (crânial + corps)"],
    images: [
        "/assets/crane1.webp",
        "/assets/crane2.webp",
        "/assets/crane3.webp",
        "/assets/crane4.webp",
        "/assets/crane5.webp",
    ]
  },
  {
    id: 8,
    title: "Massage Thaï Traditionnel",
    subtitle: "Soulager les Douleurs Pelviennes Féminines avec Douceur et Respect à Rennes",
    description:
        "Le massage traditionnel thaïlandais, dans sa version spécialisée pour les femmes, est un soin profond, ciblé et respectueux, conçu pour soulager les douleurs pelviennes, notamment liées aux règles douloureuses, à l’endométriose ou à l’adénomyose. Inspiré des techniques ancestrales du Nuad Bo-Rarn, ce massage agit sur les lignes d’énergie (Sen) et les zones réflexes, pour rééquilibrer le bassin, détendre le bas-ventre, et soutenir le bien-être global du cycle féminin.",
    deroulement: 
        "Ce soin se pratique habillé, au sol, avec des pressions douces mais profondes, des étirements adaptés, et un travail énergétique ciblé autour du bassin, du ventre, du bas du dos, des hanches et des jambes. Au-delà d’une détente musculaire profonde, il offre une libération émotionnelle précieuse, permettant de se reconnecter à son centre féminin et de renouer avec son corps dans une énergie de lâcher-prise, de qualité et de bien-être.",
    biensfaits: [
        "Soulagement efficace des douleurs menstruelles et des tensions pelviennes",
        "Détente profonde du bassin, des hanches et du bas du dos",
        "Régulation du système nerveux et apaisement émotionnel",
        "Libération des mémoires corporelles et des blocages liés au cycle féminin",
        "Reconnexion au féminin sacré et sensation d’ancrage",
        "Soutien dans les situations d’endométriose, adénomyose ou syndrome prémenstruel",
    ],
    public: 
        "Ce massage est particulièrement recommandé aux femmes : en quête d’un soin professionnel de qualité pour soulager les douleurs pelviennes chroniques ou aiguës, traversant des périodes de stress hormonal, de troubles du cycle, post-partum ou fatigue émotionnelle et désireuses d’une parenthèse de détente, d’évasion et de bien-être authentique, avec un soin respectueux et adapté.",
    price: "50€",
    duration: "40 minutes",
    images: [
        "/assets/pelv1.webp",
        "/assets/pelv2.webp"
    ]
  },
    {
    id: 9,
    title: "Massage Flow",
    subtitle: "Le massage intuitif et sur mesure by Maison So Ham",
    description:
        "Le Massage Flow est un massage intuitif et personnalisé, créé pour répondre à vos besoins du moment. Chaque mouvement s’inspire à la fois de mes connaissances en massages bien-être, de techniques apprises et de gestes spontanés qui s’adaptent à votre corps. Le résultat : un soin holistique, fluide et profond, qui libère les tensions physiques et émotionnelles. Le Massage Flow est une invitation à retrouver votre équilibre intérieur, à reconnecter à votre corps et à retrouver votre flow naturel.",
    deroulement: 
        "Chez Maison So Ham, chaque séance commence par un entretien de 5 minutes pour échanger sur vos envies, vos tensions, vos zones de douleurs ou vos attentes bien-être. Je construis ensuite un massage sur mesure, guidé par mon intuition et mon ressenti énergétique. La séance se conclut par une douce sonothérapie, permettant d’harmoniser les énergies, d’apaiser le mental et d’ancrer le lâcher-prise",
    biensfaits: [
        "Dissipe les tensions corporelles et émotionnelles aidant à retrouver une sensaztion de légèreté",
        "Renfocre la conscience corporelle et favorise un meilleure écoute de soi, facilitant un véritable lâcher-prise",
        "Améliore la circulation sanguine et lymphatique, particpant à l'élimination des toxines",
        "Réduit le stress et apaise le mental pour une sensation de paix intérieur durable",
        "Favorise un sommeil plus profond, équilibre l'humeur et apporte une sensation prolongée d'équilibre",
        "Accompagne le processus de guérison émotionnelle et permet une reconnexion corps-esprit authhentique"
    ],
    public: 
        "Toutes personnes recherchant un soin personnalisé et adapté à leurs besoins spécifiques du moment, qu'il s'agisse de détente, gestion de stress ou soulagement de tensions physiques. Ceux qui ont des tensions localiséess ou des douleurs diffuses et souhaitent un massage qui s'ajuste en temps réel à leur corps. Les individus en quête d'une expérience profondément relaxante, harmonisante et qui favorise un équilibre entre corps et esprit.",
    price: ["55€", "80€"],
    duration: ["40 minutes", "70 minutes"],
    images: [
        "/assets/flow1.webp",
        "/assets/flow2.webp",
        "/assets/flow3.webp",
    ],
    coments: [{
        name: "Steven L",
        content: " Massage au top ! Testé après un gros effort physique, résultat : très peu de courbature les jours suivants. J’ai vraiment bien récupéré grâce à ce massage. Très professionnelle, je recommande vivement Emma pour des moments de relaxation, détente, récupération."
    },
    ],
  },
   {
    id: 10,
    title: "Massage Flow Prénatal",
    subtitle: " Le massage intuitif pour femmes enceintes by Maison So Ham",
    description:
        "Le Massage Flow Prénatal est un massage intuitif et bienveillant, spécialement conçu pour accompagner la femme enceinte tout au long de sa grossesse. Inspiré du Massage Flow signature de Maison So Ham, ce soin s’adapte à chaque future maman, en tenant compte de ses besoins physiques, de ses émotions et du rythme de sa grossesse. Ce massage favorise la connexion entre la maman et le bébé, aide à soulager les tensions, à améliorer la circulation et à apaiser le mental. Un véritable cocon de douceur, où maman et bébé se reposent, respirent et se rencontrent autrement",
    deroulement: 
        "CAvant de commencer, un entretien personnalisé permet d’échanger sur vos douleurs, tensions, envies et zones sensibles. Pendant la séance, je me laisse guider par mon intuition, en associant gestes enveloppants et mouvements fluides pour offrir un moment de détente profonde et sécuritaire, tout en respectant les contre-indications liées à la grossesse.",
    biensfaits: [
        "Soulage les douleurs musculaires et articulaires, notamment dans le bas du dos, les jambes et le bassin, qui sont très sollicités durant la grossesse",
        "Améliore la circulation sanguine et lymphatique aidant à réduire les gonflements et à oxygèner les tissus en profondeur, ce qui est particulièrement bénéfique contre les jambes lourdes et les oedèmes",
        "Diminue le stress et l'anxiété grâce à une relaxation profonde et à la stimulation de la production d'ocytocine, une hormone favorisant le bien-être physique et émotionnel, bénéfique aussi pour le bébé",
        "Prépare le corps à l'accouchement en détendant les muscles, notamment ceux du périnée, et améliore la posture générale",
        "Reconnexion corps-esprit, favorisant un lien sensible et apaisant entre la future maman et son bébé"
    ],
    public: 
        "Femmes enceintes souhaitant un soin doux et adapté pour soulager les maux spécifiques liés à la grossesse, tout en favorisant détente et bien-être. Celles qui recherchent une meilleure gestion du stress et un apaisement émotionnel durant cette période de transformation. Les futurs mamans qui souhaitent renforcer leur lien affectif avec leur bébé par un moment de douceur et de connexion profonde.",
    price: "80€",
    duration: "75 minutes ",
    images: [
        "/assets/pre1.webp",
        "/assets/pre2.webp"
    ],
  },
]

export default prestaData;
