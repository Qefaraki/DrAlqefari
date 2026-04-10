export const languages = {
  ar: 'العربية',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  ar: {
    // Meta
    'meta.title': 'د. عبدالله القفاري | المهداف في القيادة والتخطيط وبناء الثروة',
    'meta.description': 'استاذ جامعي ومهداف معتمد في مجال القيادة والتخطيط الاستراتيجي وبناء الأصول والثروة',

    // Nav
    'nav.about': 'عن المهداف',
    'nav.coaching': 'المهداف',
    'nav.services': 'الخدمات',
    'nav.testimonials': 'آراء العملاء',
    'nav.contact': 'تواصل',

    // Hero
    'hero.hook': 'كن حذرًا',
    'hero.stat': 'احرص على إدارة أموالك بعناية فإن 70% من أبناء الأثرياء والمشاهير والرياضيين والفائزين بالأموال اليانصيب يفقدون أموالهم خلال خمس اعوام',
    'hero.cta': 'احجز جلستك الآن',

    // About
    'about.title': 'د. عبدالله القفاري',
    'about.subtitle': 'استاذ جامعي ومهداف معتمد',
    'about.bio': 'مهداف متخصص في القيادة والتخطيط الاستراتيجي وبناء الأصول والثروة. أساعد الأفراد والعائلات في تحقيق أهدافهم المهنية والمالية والشخصية من خلال برامج المهداف المتكاملة.',

    // Coaching
    'coaching.title': 'ما هو المهداف؟',
    'coaching.definition': 'المهداف هو عملية تعاونية بين المهداف والعميل، تهدف إلى تحقيق تحسينات في حياة العميل وتحقيق أهدافه وتشحذ الفكرَ والإبداع لديه، وتُلهمه ليضاعف قدراته وإمكانياته الشخصية',
    'coaching.source': 'الاتحاد الدولي للمهداف (ICF)',
    'coaching.session.title': 'تفاصيل الجلسات',
    'coaching.session.format': 'حضوري',
    'coaching.session.duration': '٥ - ٨ ساعات',
    'coaching.session.guarantee': 'يمكنك الانسحاب بعد أول جلسة',

    // Services
    'services.title': 'كيف أساعدك؟',
    'services.card1.title': 'وضّح أهدافك',
    'services.card1.desc': 'قم بتبسيط عمليات أعمالك بكل سهولة باستخدام برنامج المهداف مع التخطيط الاستراتيجي والعملياتي والشخصي',
    'services.card2.title': 'أصبح قائدًا أكثر فعالية',
    'services.card2.desc': 'تتبع المشاريع والمهام بسهولة باستخدام معلومات وأدوات عملية قابلة للتطبيق',
    'services.card3.title': 'حقق أهدافك',
    'services.card3.desc': 'جدد طاقتك، وحسِّن نفسيتك، وحقق أهدافك مع مهداف ذا خبرة',

    // Testimonials
    'testimonials.title': 'آراء العملاء',
    'testimonials.1.name': 'ياسر',
    'testimonials.1.text': 'شكرا على الكوتش الرائع و الجلسات المثرية استفدت منك الكثير وكان لها دور كبير في التوازن في حياتي والتفوق الدراسي والتركيز على بناء المهارات وشكرا جزيلًا مرة اخر على كل جهد بذلته معي',
    'testimonials.2.name': 'أم أحمد',
    'testimonials.2.text': 'حابة أشكرك جزيل الشكر على الفترة اللي كنت فيها معانا، نِعم الأخ قبل أن تكون مستشار وكوتش استفدنا منك جداً طوال هذه الفترة وغيرت الكثير في حياتنا اسأل الله أن يبارك لك في حياتك وابناءك ومالك ويمطر عليك الرزق الحسن.. والله الكلام يعجز عن شكرك وامتناني لما قدمته لنا، وسعة صدرك وحلمك علينا.. الله يجزاك خير.',
    'testimonials.3.name': 'ع. العثيم',
    'testimonials.3.text': 'اولا اشكر الله الذي سخر لي برنامج الكوتشنق ثانيا اشكر الدكتور عبدالله القفاري على كل جهوده معي في جلسات الكوتش حيث انه في البداية بث فيني المعنوية العالية والثقة بالنفس ومن ثم جعلني افكر واخطط لحياتي المستقبلية تخطيط استراتيجي استفدت منه الكثير بحكم خبرته الطويلة في هذا المجال في بناء اهدافي وتعلم كثير من المهارات كان سند لي في آخر ثلاث سنين وكان متواجد في كل قرار اتخذه اسأل الله ان يطيل في عمرك وان يحفظك',
    'testimonials.4.name': 'هدى صالح',
    'testimonials.4.text': 'وددت ان ارسل رسالة شكر على دعمك النفسي المستمر وتوجيهك واستشاراتك القيمة كان لك الأثر الكبير والتغير الإيجابي والنمو الفعال والاستقرار النفسي والاجتماعي والمادي في حياتي الأسرية والتجارية والشخصية. ساعدتني كثيرا في تعلم التخطيط الاستراتيجي في بناء الأصول والتطور في الاستثمار. كما كان لك الأثر الواضح في الاستشارات التي قدمتها لأبنائي كانت بدايتي معك عام 2019 وكوتش الأسرة حينها غير معروف في المجتمع لا اخفيك ترددت نوعاً ما قبل الإقدام على طلب كوتش أسري لي ولأبنائي وأحمد الله كل يوم أن أعانني وسددني واقدمت على طلبي في دخول برنامج الكوتشنق لديكم ولكم منى الدعوات الصادقة بالتوفيق والسداد والرفعة في الدنيا والآخرة',

    // Contact
    'contact.title': 'مستعد تكتب قصة نجاحك؟',
    'contact.whatsapp': 'تواصل معنا عبر واتساب',
    'contact.email.label': 'البريد الإلكتروني',
    'contact.email': 'qefari@gmail.com',
    'contact.phone.label': 'الجوال',
    'contact.phone': '+966 53 954 9922',
    'contact.followUs': 'تابعنا',

    // Photos / In the field
    'photos.label': 'في الميدان',
    'photos.title': 'لقاءات ومناسبات',
    'photos.wozniak.caption': 'مع ستيف وزنياك',
    'photos.wozniak.note': 'مؤسس شركة آبل',
    'photos.scholar.caption': 'في إحدى المناسبات',
    'photos.book.caption': 'لقاء مع أحد الحضور',

    // Nav - CV
    'nav.cv': 'السيرة الذاتية',

    // CV Highlights (landing page)
    'cvHighlights.label': 'السيرة الذاتية',
    'cvHighlights.title': 'المؤهلات والخبرات',
    'cvHighlights.stat1.value': 'دكتوراه',
    'cvHighlights.stat1.label': 'من جامعة برونل في برامج الموهوبين',
    'cvHighlights.stat2.value': '+14',
    'cvHighlights.stat2.label': 'سنة خبرة في التدريب والتخطيط وإدارة العقار',
    'cvHighlights.stat3.value': '+30',
    'cvHighlights.stat3.label': 'دورة معتمدة في التنمية البشرية والإدارة',
    'cvHighlights.stat4.value': 'ماستر كوتش',
    'cvHighlights.stat4.label': 'من أكاديمية الكوتشنق في بريطانيا',
    'cvHighlights.cta': 'عرض السيرة الذاتية كاملة',

    // CV Page
    'cv.pageTitle': 'السيرة الذاتية',
    'cv.backToHome': 'الرئيسية',
    'cv.name': 'د. عبدالله القفاري',
    'cv.title1': 'الأستاذ المساعد بجامعة الإمام بالرياض',
    'cv.title2': 'استشاري ريادة الأعمال والاستثمار والعقار',
    'cv.title3': 'التخطيط الاستراتيجي والقيادة والمهداف',
    'cv.education.title': 'التعليم',
    'cv.education.1': 'دكتوراه من جامعة برونل، بريطانيا — برامج الموهوبين، 2010',
    'cv.education.2': 'دبلوم عالي في التأمين والتمويل الدولي — جامعة برونل، بريطانيا',
    'cv.education.3': 'ماجستير في الاجتماع والخدمة الاجتماعية — جامعة الملك سعود',
    'cv.education.4': 'بكالوريوس خدمة اجتماعية — جامعة الإمام',
    'cv.education.5': '5 دورات متقدمة في التصميم والبرمجة — كلية شرق لندن',
    'cv.training.title': 'التدريب والشهادات',
    'cv.training.realEstate.title': 'ماستر في التطوير والاستثمار العقاري',
    'cv.training.realEstate.items': 'العقارات السكنية،عقارات التجزئة،العقارات التجارية،المراكز المقفلة،عقارات الإيجار،عقارات الخدمات الاجتماعية،إدارة المرافق العامة',
    'cv.training.coaching.title': 'ماستر كوتشنق — أكاديمية الكوتشنق، بريطانيا',
    'cv.training.coaching.items': 'نموذج التواصل،نموذج DISC،نموذج Growth،نموذج التحولات الحياتية،نموذج الكوتشنق بين الكبار والمرؤوسين،نموذج القيادة والإدارة،تحفيز العلاقات المتعثرة،التطبيقات العملية',
    'cv.training.courses': 'أكثر من 30 دورة معتمدة في التنمية البشرية والإدارة',
    'cv.skills.title': 'المهارات',
    'cv.skills.list': 'التخطيط الاستراتيجي،الإدارة المالية،التأثير بالجماهير،إنشاء وتحليل المنظمات،أنماط وخطط الشخصية،إدارة حوار الاجتماع والعلاقات،التعامل مع الشخصيات الصعبة،مهارات التقديم والعرض،القراءة السريعة،التفاوض والإقناع،النفوذ والتأثير،إدارة الوقت والأولويات،الحكامة الأسرية',
    'cv.experience.title': 'الخبرات',
    'cv.experience.1': 'عضو هيئة التدريس بجامعة الإمام بالرياض',
    'cv.experience.2': 'تقديم دورات تدريبية واستشارات في التخطيط والقيادة والريادة',
    'cv.experience.3': 'كوتش معتمد في مجال النجوم وأحداث المال والأعمال',
    'cv.experience.4': 'كوتش في التدريب والتخطيط وإدارة العقار لأكثر من 14 سنة',
    'cv.experience.5': 'رئيس مجلس إدارة شركة دبي وود العقارية بالمملكة',
    'cv.experience.6': 'عضو مجلس إدارة وكالة مروم للدعاية والإعلام بالمملكة',
    'cv.cta': 'تواصل معي',

    // FAQ
    'nav.faq': 'الأسئلة الشائعة',
    'faq.title': 'الأسئلة الشائعة',

    // Category titles
    'faq.cat1': 'مفهوم الكوتشنج',
    'faq.cat2': 'الجلسات والعملية',
    'faq.cat3': 'الفوائد والنتائج',
    'faq.cat4': 'من يستفيد؟',
    'faq.cat5': 'خدمات إضافية',
    'faq.cat6': 'الدفع والسياسات',

    // Category 1: Understanding Coaching
    'faq.1.q': 'ما هو الفرق بين الكوتشنج والتدريب؟',
    'faq.1.a': 'الكوتشنج يركز على تمكين الفرد من اكتشاف حلوله بنفسه من خلال الأسئلة والتوجيه، بينما التدريب ينقل المعلومات والمعرفة وينمي المهارات بشكل مباشر. الكوتش يساعدك على التفكير والوصول للإجابات، أما المدرب فيقدم لك الإجابات والمهارات.',
    'faq.2.q': 'ما هي أهداف الكوتشنج والمهداف؟',
    'faq.2.a': 'تطوير المهارات الشخصية والمهنية، تحسين التواصل مع الآخرين، زيادة الوعي الذاتي، تحقيق التوازن بين الحياة الشخصية والمهنية، والوصول إلى الأهداف المحددة بكفاءة أعلى.',
    'faq.3.q': 'ما هي أنواع الكوتشنج؟',
    'faq.3.a': 'الكوتشنج الشخصي، والمهني، والتنفيذي، والصحي، والتجاري، وكوتشنج الحياة. كل نوع يركز على جانب معين من حياة العميل ويستخدم أدوات وتقنيات مخصصة لتحقيق الأهداف في ذلك المجال.',
    'faq.4.q': 'ما هو دور الكوتش؟',
    'faq.4.a': 'دعم وتوجيه العميل في تحقيق أهدافه من خلال بناء علاقة قائمة على الثقة والاحترام المتبادل. الكوتش يستمع بعمق، يطرح أسئلة قوية، ويساعد العميل على رؤية الأمور من زوايا جديدة.',
    'faq.5.q': 'ما هي المهارات الأساسية للكوتش؟',
    'faq.5.a': 'الاستماع الفعّال، وتوجيه الأسئلة المفيدة، وبناء علاقة ثقة مع العميل، وفهم اللغة غير اللفظية، والقدرة على تحفيز العميل وإلهامه لتحقيق أهدافه.',
    'faq.6.q': 'ما هو الوعي الذاتي في الكوتشنج؟',
    'faq.6.a': 'الفهم العميق للفرد من هو وما يريد، ويشمل التعرف على القيم والمعتقدات ونقاط القوة والضعف. الوعي الذاتي هو الأساس الذي يُبنى عليه التطوير الشخصي والمهني.',
    'faq.7.q': 'ما هو التحفيز في الكوتشنق؟',
    'faq.7.a': 'ما يحفز الفرد للعمل نحو أهدافه من خلال تحديد أهداف ملهمة وتقسيمها إلى مراحل صغيرة قابلة للتحقيق، مما يخلق شعوراً بالإنجاز المستمر ويدفع العميل للمضي قدماً.',
    'faq.8.q': 'ما الفرق بين جلسة الاستشارة وجلسات الكوتشنج؟',
    'faq.8.a': 'الاستشارة تقدم نصائح وحلول محددة لمشكلة معينة في وقت قصير، بينما الكوتشنج يركز على التطوير الشامل وتحقيق الأهداف طويلة الأجل من خلال برنامج متكامل ومستمر.',

    // Category 2: Sessions & Process
    'faq.9.q': 'ما هي الخطوات الرئيسية في الجلسة الأولى؟',
    'faq.9.a': 'تبدأ بتحديد الأهداف والتوقعات، ثم التعارف وفهم التحديات الحالية، يليها تطوير خطة عمل مبدئية للجلسات المستقبلية، وإقامة تواصل جيد وعلاقة ثقة بين الكوتش والعميل.',
    'faq.10.q': 'ما هي الأدوات والتقنيات الشائعة المستخدمة؟',
    'faq.10.a': 'توجيه الأسئلة الفعّالة، وتحفيز التفكير الإيجابي، والاستماع الفعّال، واستخدام اختبارات الشخصية مثل نموذج DISC، ونموذج Growth، وأدوات التخطيط الاستراتيجي المتنوعة.',
    'faq.11.q': 'ما هي تقنيات التحفيز المستخدمة؟',
    'faq.11.a': 'تحديد الأهداف الذكية (محددة، قابلة للقياس، وقابلة للتحقيق)، وتشجيع التحدي الذاتي، وتقسيم الأهداف الكبيرة إلى خطوات صغيرة، والاحتفال بالإنجازات المرحلية.',
    'faq.12.q': 'كيف يمكن قياس تقدم الكوتشنق؟',
    'faq.12.a': 'من خلال مراقبة التغييرات في السلوك والعادات، ومدى تحقيق الأهداف المحددة، واستخدام مقاييس ومعايير محددة يتم الاتفاق عليها في بداية البرنامج.',
    'faq.13.q': 'ما هو دور التقييم في الكوتشنق؟',
    'faq.13.a': 'التقييم يساعد في تحديد مدى التقدم وفهم مدى تحقيق الأهداف، مما يمكّن من تحسين الجلسات وتعديل الخطة لضمان تحقيق أفضل النتائج الممكنة.',
    'faq.14.q': 'هل الجلسة مع الكوتش وجهاً لوجه؟',
    'faq.14.a': 'نعم، الجلسات حضورية وجهاً لوجه، وتستمر ما بين ٥ إلى ٨ ساعات حسب الحاجة والنقاش. الجلسات الحضورية تتيح تفاعلاً أعمق وأكثر فعالية.',
    'faq.15.q': 'هل هناك مكان محدد لجلسات الكوتش؟',
    'faq.15.a': 'يتم تحديد المكان بناءً على الاتفاق مع العميل. يمكن أن تكون الجلسات في مكتب الدكتور القفاري أو في فندق أو مكان مناسب آخر.',
    'faq.16.q': 'هل يمكنني تحديد المكان وفقاً لاحتياجاتي؟',
    'faq.16.a': 'نعم، يمكنك تحديد المكان المناسب لك بالتنسيق مع الكوتش، سواء كان في مكان العمل أو أي موقع آخر يناسبك.',
    'faq.17.q': 'هل يمكن لزوجي أو أحد أفراد عائلتي حضور الجلسات؟',
    'faq.17.a': 'نعم، إمكانية حضور زوجك أو أفراد عائلتك تعتمد على تفضيلاتك وطبيعة البرنامج. في برامج الكوتشنج الأسري يُشجع حضور أفراد الأسرة.',
    'faq.18.q': 'هل هناك أحد يحضر الجلسة من العاملين؟',
    'faq.18.a': 'لا، يحضر الجلسات الكوتش الدكتور القفاري فقط، مع ضمان سرية تامة لجميع المعلومات التي يتم مشاركتها خلال الجلسات.',
    'faq.19.q': 'هل يوجد جلسات كوتش عن بعد؟',
    'faq.19.a': 'جلسات الاستشارة قد تكون عن بعد، لكن جلسات الكوتش حضورية لأنها طويلة (٥-٨ ساعات) وتتطلب تفاعلاً مباشراً للحصول على أفضل النتائج.',

    // Category 3: Benefits & Results
    'faq.20.q': 'كيف يمكن للكوتشنق أن يساعد في تحسين مهارات الاتصال؟',
    'faq.20.a': 'من خلال تطوير الاستماع الفعّال، وتعلم طرح الأسئلة البناءة، وتحسين الفهم العاطفي والتواصل غير اللفظي، مما ينعكس إيجاباً على العلاقات الشخصية والمهنية.',
    'faq.21.q': 'كيف يساعد الكوتشنج في تحسين التوازن بين الحياة الشخصية والمهنية؟',
    'faq.21.a': 'من خلال تحليل الأولويات وتقديم تقنيات إدارة الوقت واستراتيجيات فعالة لتحقيق التوازن بين مختلف جوانب الحياة دون التضحية بأي منها.',
    'faq.22.q': 'ما هي الفوائد النفسية للكوتشنج؟',
    'faq.22.a': 'زيادة الثقة بالنفس، وتحسين التواصل مع الآخرين، وتطوير الوعي الذاتي، والشعور بالاستقرار النفسي والاجتماعي، والقدرة على اتخاذ قرارات أفضل.',
    'faq.23.q': 'ما هي التحديات الشائعة خلال جلسات الكوتشنج؟',
    'faq.23.a': 'عدم التفرغ الكامل للجلسات، صعوبة تحديد الأهداف بوضوح في البداية، ومقاومة التغيير. الكوتش يساعد في التغلب على هذه التحديات بصبر واحترافية.',
    'faq.24.q': 'ما هي العقبات الشائعة التي تمنع النجاح؟',
    'faq.24.a': 'الخوف من التغيير وعدم الالتزام بالخطة الموضوعة، إضافة إلى المشكلات الشخصية أو المهنية التي قد تشتت التركيز عن الأهداف المحددة.',
    'faq.25.q': 'ما هي الاستراتيجيات لاستدامة التحسينات؟',
    'faq.25.a': 'تطوير عادات جديدة وتطبيق المهارات المكتسبة بشكل منتظم، مع إجراء تقييم دوري للتقدم والاستمرار في التعلم والتطوير حتى بعد انتهاء البرنامج.',

    // Category 4: Who Benefits?
    'faq.26.q': 'هل يمكن تقديم الكوتشنق للمشاهير والرياضيين والإعلاميين؟',
    'faq.26.a': 'نعم، يوجد مسار خاص للمشاهير والرياضيين والإعلاميين يركز على تحقيق الأهداف وبناء الثروة وإدارة الشهرة والحفاظ على التوازن في حياتهم.',
    'faq.27.q': 'هل يمكن لأصحاب الرواتب الممتازة الاستفادة من الكوتشنج؟',
    'faq.27.a': 'نعم، الكوتشنج يساعد القضاة والمدراء والمحامين والأطباء وغيرهم من أصحاب الدخل المرتفع في بناء الأصول والاستثمار وتنمية ثرواتهم بشكل استراتيجي.',
    'faq.28.q': 'هل يوجد كوتش جماعي للأسرة أو مجلس الإدارة؟',
    'faq.28.a': 'نعم، يوجد كوتشنج للمجموعات سواء للأسر أو لمجالس الإدارة، ويتم تحديد البرنامج حسب عدد الأفراد والأهداف المشتركة والمدة المطلوبة.',
    'faq.29.q': 'هل الكوتشنج يساعد الفرق الرياضية واللاعبين؟',
    'faq.29.a': 'نعم، يمكن تقديم استراتيجيات للتحكم في التوتر وإعادة بناء الثقة وتحسين الأداء وإدارة الأموال والاستثمار للرياضيين والفرق الرياضية.',
    'faq.30.q': 'هل الكوتشنق مفيد لكبار المسؤولين والوزراء والأمراء؟',
    'faq.30.a': 'نعم، الكوتشنق مفيد للقادة وكبار المديرين التنفيذيين في تطوير مهارات القيادة والتخطيط الاستراتيجي واتخاذ القرارات وبناء فرق عمل فعالة.',
    'faq.31.q': 'هل الكوتشنق فقط للأغنياء؟',
    'faq.31.a': 'لا، الكوتشنج يمكن أن يكون مفيداً للأغنياء وأي شخص آخر بغض النظر عن الحالة المالية. كل من يسعى لتحقيق أهدافه وتطوير حياته يمكنه الاستفادة من الكوتشنج.',
    'faq.32.q': 'هل هناك أحد استفاد من الكوتش؟',
    'faq.32.a': 'نعم، الكثير من العملاء استفادوا من برامج الكوتشنج، ولم يسبق أن انسحب أي عميل بعد الجلسة الأولى بنسبة ١٠٠٪. يمكنك الاطلاع على آراء العملاء في قسم الشهادات.',

    // Category 5: Additional Services
    'faq.33.q': 'كيف يمكن العثور على مدرب كوتشنق معتمد؟',
    'faq.33.a': 'يمكن البحث عبر الجمعيات المهنية والمواقع المعترف بها مثل الاتحاد الدولي للمهداف (ICF)، مع التحقق من خلفية المدرب وشهاداته وخبراته.',
    'faq.34.q': 'هل يساعد الكوتش في اختيار المستشارين؟',
    'faq.34.a': 'نعم، الكوتش يساعد في اختيار أفضل المستشارين والمحامين والأطباء وغيرهم من المتخصصين بناءً على خبرته وشبكة علاقاته المهنية.',
    'faq.35.q': 'هل يمكن للكوتش المساعدة في شراء أصول عقارية؟',
    'faq.35.a': 'نعم، يمكن للكوتش مساعدتكم في ذلك بحكم خبرته الطويلة في مجال التطوير والاستثمار العقاري وإدارة العقار لأكثر من ١٤ سنة.',
    'faq.36.q': 'هل يمكن للكوتش المساعدة في مراجعة الاتفاقيات قبل إتمامها؟',
    'faq.36.a': 'نعم، يمكن ذلك خاصة في مجال البزنس والمال والثروة. الكوتش يساعد في مراجعة وتقييم الاتفاقيات والعقود لضمان تحقيق أفضل المصالح.',

    // Category 6: Payment & Policies
    'faq.37.q': 'كيفية دفع التكاليف؟',
    'faq.37.a': 'يتم دفع الرسوم مقدماً قبل الجلسات عن طريق التحويل البنكي.',
    'faq.38.q': 'هل فيه ضمان لنجاح الجلسات؟',
    'faq.38.a': 'نعم، نقدم الضمان الذهبي حيث لك الخيار بالانسحاب بعد الجلسة الأولى إذا لم تجد البرنامج مناسباً لك.',

    // Blog
    'nav.blog': 'المدونة',
    'blog.title': 'المدونة',
    'blog.subtitle': 'مقالات ونصائح في القيادة والتخطيط وبناء الثروة',
    'blog.readMore': 'اقرأ المزيد',
    'blog.backToHome': 'الرئيسية',
    'blog.backToBlog': 'العودة للمدونة',
    'blog.noPosts': 'لا توجد مقالات حالياً',
    'blog.min': 'دقائق للقراءة',

    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
  },

  en: {
    // Meta
    'meta.title': 'Dr. Abdullah Alqefari | Leadership & Wealth Building Coach',
    'meta.description': 'University professor and certified coach specializing in leadership, strategic planning, and wealth building',

    // Nav
    'nav.about': 'About',
    'nav.coaching': 'Coaching',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',

    // Hero
    'hero.hook': 'Be Careful',
    'hero.stat': 'Manage your money wisely — 70% of wealthy heirs, celebrities, athletes, and lottery winners lose their wealth within just 5 years.',
    'hero.cta': 'Book Your Session',

    // About
    'about.title': 'Dr. Abdullah Alqefari',
    'about.subtitle': 'University Professor & Certified Coach',
    'about.bio': 'A coach specializing in leadership, strategic planning, and wealth building. I help individuals and families achieve their professional, financial, and personal goals through comprehensive coaching programs.',

    // Coaching
    'coaching.title': 'What is Coaching?',
    'coaching.definition': 'Coaching is a collaborative process between coach and client, aimed at achieving life improvements, reaching goals, stimulating creativity, and inspiring clients to maximize their personal capabilities and potential.',
    'coaching.source': 'International Coaching Federation (ICF)',
    'coaching.session.title': 'Session Details',
    'coaching.session.format': 'In-person',
    'coaching.session.duration': '5 – 8 hours',
    'coaching.session.guarantee': 'You may withdraw after the first session',

    // Services
    'services.title': 'How Can I Help?',
    'services.card1.title': 'Clarify Your Goals',
    'services.card1.desc': 'Simplify your business operations with strategic, operational, and personal planning through coaching',
    'services.card2.title': 'Become a More Effective Leader',
    'services.card2.desc': 'Track projects and tasks with practical, actionable tools and insights',
    'services.card3.title': 'Achieve Your Goals',
    'services.card3.desc': 'Renew your energy, improve your mindset, and reach your goals with an experienced coach',

    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.1.name': 'Yasser',
    'testimonials.1.text': 'Thank you for the amazing coaching and enriching sessions. I benefited greatly, and it played a major role in achieving balance in my life, academic excellence, and building skills. Thank you so much for every effort you put in with me.',
    'testimonials.2.name': 'Um Ahmad',
    'testimonials.2.text': 'I want to deeply thank you for the time you spent with us. You were a brother before being a consultant and coach. We benefited immensely throughout that period, and you changed so much in our lives. May God bless you in your life, children, and wealth.',
    'testimonials.3.name': 'A. Al-Othaim',
    'testimonials.3.text': 'First, I thank God who guided me to coaching. Second, I thank Dr. Abdullah Alqefari for all his efforts. He instilled confidence and high morale in me, then helped me think and plan strategically for my future. He has been my support for the past three years, present in every decision I made.',
    'testimonials.4.name': 'Huda Saleh',
    'testimonials.4.text': 'I wanted to send a thank you message for your continuous psychological support, guidance, and valuable consultations. You had a profound impact — positive change, effective growth, and psychological, social, and financial stability in my family, business, and personal life. My journey with you began in 2019 when family coaching was still unknown in our community.',

    // Contact
    'contact.title': 'Ready to Write Your Success Story?',
    'contact.whatsapp': 'Contact Us on WhatsApp',
    'contact.email.label': 'Email',
    'contact.email': 'qefari@gmail.com',
    'contact.phone.label': 'Phone',
    'contact.phone': '+966 53 954 9922',
    'contact.followUs': 'Follow Us',

    // Photos / In the field
    'photos.label': 'In the Field',
    'photos.title': 'Meetings & Moments',
    'photos.wozniak.caption': 'With Steve Wozniak',
    'photos.wozniak.note': 'Co-founder of Apple',
    'photos.scholar.caption': 'At an event',
    'photos.book.caption': 'Meeting attendees',

    // Nav - CV
    'nav.cv': 'CV',

    // CV Highlights (landing page)
    'cvHighlights.label': 'Curriculum Vitae',
    'cvHighlights.title': 'Qualifications & Experience',
    'cvHighlights.stat1.value': 'Ph.D.',
    'cvHighlights.stat1.label': 'Brunel University — Gifted Programs',
    'cvHighlights.stat2.value': '14+',
    'cvHighlights.stat2.label': 'Years in Coaching, Planning & Real Estate',
    'cvHighlights.stat3.value': '30+',
    'cvHighlights.stat3.label': 'Certified Courses in Human Development & Management',
    'cvHighlights.stat4.value': 'Master Coach',
    'cvHighlights.stat4.label': 'The Coaching Academy, UK',
    'cvHighlights.cta': 'View Full CV',

    // CV Page
    'cv.pageTitle': 'Curriculum Vitae',
    'cv.backToHome': 'Home',
    'cv.name': 'Dr. Abdullah Alqefari',
    'cv.title1': 'Assistant Professor at Imam University, Riyadh',
    'cv.title2': 'Entrepreneurship, Investment & Property Consultant',
    'cv.title3': 'Strategic Planning, Leadership & Coaching',
    'cv.education.title': 'Education',
    'cv.education.1': 'Ph.D., Brunel University, UK — Gifted Programs, 2010',
    'cv.education.2': 'Higher Diploma in Insurance & International Finance — Brunel University, UK',
    'cv.education.3': "Master's in Sociology & Social Work — King Saud University",
    'cv.education.4': 'Bachelor of Social Work — Imam University',
    'cv.education.5': '5 Advanced Courses in Design & Programming — East London College',
    'cv.training.title': 'Training & Certifications',
    'cv.training.realEstate.title': 'Master in Real Estate Development & Investment',
    'cv.training.realEstate.items': 'Residential Properties,Retail Properties,Commercial Properties,Closed Centers,Lease Properties,Social Services Properties,Facilities Management',
    'cv.training.coaching.title': 'Master Coach — The Coaching Academy, UK',
    'cv.training.coaching.items': 'Communication Model,DISC Model,Growth Model,Life Transitions Model,Executive Coaching Model,Leadership & Management Model,Relationship Restoration,Practical Applications',
    'cv.training.courses': 'Over 30 certified courses in Human Development and Management',
    'cv.skills.title': 'Skills',
    'cv.skills.list': 'Strategic Planning,Financial Management,Public Speaking & Influence,Organizational Analysis,Personality Profiling,Stakeholder & Relationship Management,Handling Difficult Personalities,Presentation & Facilitation,Speed Reading,Negotiation & Persuasion,Executive Influence,Time & Priority Management,Family Governance',
    'cv.experience.title': 'Experience',
    'cv.experience.1': 'Faculty Member, Imam University, Riyadh',
    'cv.experience.2': 'Training, consulting, and program delivery in strategic planning, leadership, and entrepreneurship',
    'cv.experience.3': 'Certified coach for high-profile clients and business events',
    'cv.experience.4': '14+ years as a coach in training, planning, and real estate management',
    'cv.experience.5': 'Board Chairman, Dubai Wood Real Estate Company, Saudi Arabia',
    'cv.experience.6': 'Board Member, Marom Advertising & Media Agency, Saudi Arabia',
    'cv.cta': 'Get in Touch',

    // FAQ
    'nav.faq': 'FAQ',
    'faq.title': 'Frequently Asked Questions',

    // Category titles
    'faq.cat1': 'Understanding Coaching',
    'faq.cat2': 'Sessions & Process',
    'faq.cat3': 'Benefits & Results',
    'faq.cat4': 'Who Benefits?',
    'faq.cat5': 'Additional Services',
    'faq.cat6': 'Payment & Policies',

    // Category 1: Understanding Coaching
    'faq.1.q': 'What is the difference between coaching and training?',
    'faq.1.a': 'Coaching focuses on empowering you to discover your own solutions through powerful questions and guidance, while training directly transfers knowledge and skills. A coach helps you think and reach your own answers, whereas a trainer provides the answers and skills directly.',
    'faq.2.q': 'What are the goals of coaching?',
    'faq.2.a': 'Developing personal and professional skills, improving communication, increasing self-awareness, achieving work-life balance, and reaching your specific goals with greater efficiency.',
    'faq.3.q': 'What types of coaching are available?',
    'faq.3.a': 'Personal coaching, professional coaching, executive coaching, health coaching, business coaching, and life coaching. Each type focuses on a specific aspect of the client\'s life using specialized tools and techniques.',
    'faq.4.q': 'What is the role of a coach?',
    'faq.4.a': 'To support and guide clients in achieving their goals through a relationship built on mutual trust and respect. The coach listens deeply, asks powerful questions, and helps clients see things from new perspectives.',
    'faq.5.q': 'What are the essential skills of a coach?',
    'faq.5.a': 'Active listening, asking meaningful questions, building a relationship of trust with clients, understanding non-verbal language, and the ability to motivate and inspire clients to achieve their goals.',
    'faq.6.q': 'What is self-awareness in coaching?',
    'faq.6.a': 'A deep understanding of who you are and what you want, including recognizing your values, beliefs, strengths, and weaknesses. Self-awareness is the foundation upon which all personal and professional development is built.',
    'faq.7.q': 'What is motivation in coaching?',
    'faq.7.a': 'What drives a person to work toward their goals by setting inspiring objectives and breaking them into small, achievable stages, creating a sense of continuous accomplishment that propels the client forward.',
    'faq.8.q': 'What is the difference between a consultation and coaching sessions?',
    'faq.8.a': 'A consultation provides specific advice and solutions for a particular problem in a short time, while coaching focuses on comprehensive development and achieving long-term goals through an integrated, ongoing program.',

    // Category 2: Sessions & Process
    'faq.9.q': 'What are the key steps in the first session?',
    'faq.9.a': 'It begins with defining goals and expectations, followed by getting to know each other and understanding current challenges, then developing an initial action plan for future sessions, and establishing good communication and trust between coach and client.',
    'faq.10.q': 'What tools and techniques are commonly used?',
    'faq.10.a': 'Effective questioning, positive thinking stimulation, active listening, personality assessments such as the DISC model, the Growth model, and various strategic planning tools.',
    'faq.11.q': 'What motivation techniques are used?',
    'faq.11.a': 'Setting SMART goals (Specific, Measurable, Achievable), encouraging self-challenge, breaking large goals into small steps, and celebrating milestone achievements.',
    'faq.12.q': 'How is coaching progress measured?',
    'faq.12.a': 'By monitoring changes in behavior and habits, tracking progress toward defined goals, and using specific metrics and criteria agreed upon at the start of the program.',
    'faq.13.q': 'What is the role of evaluation in coaching?',
    'faq.13.a': 'Evaluation helps determine the level of progress and how well goals are being achieved, enabling session improvements and plan adjustments to ensure the best possible outcomes.',
    'faq.14.q': 'Are sessions conducted face-to-face?',
    'faq.14.a': 'Yes, sessions are in-person and face-to-face, lasting between 5 to 8 hours depending on need and discussion. In-person sessions allow for deeper and more effective interaction.',
    'faq.15.q': 'Is there a specific location for coaching sessions?',
    'faq.15.a': 'The location is determined based on agreement with the client. Sessions can be held at Dr. Alqefari\'s office, at a hotel, or another suitable location.',
    'faq.16.q': 'Can I choose the location according to my needs?',
    'faq.16.a': 'Yes, you can choose a suitable location in coordination with the coach, whether at your workplace or any other location that works for you.',
    'faq.17.q': 'Can my spouse or family members attend the sessions?',
    'faq.17.a': 'Yes, attendance of your spouse or family members depends on your preferences and the nature of the program. In family coaching programs, family member attendance is encouraged.',
    'faq.18.q': 'Does anyone else attend the session besides the coach?',
    'faq.18.a': 'No, only Dr. Alqefari attends the sessions, with complete confidentiality guaranteed for all information shared during sessions.',
    'faq.19.q': 'Are remote coaching sessions available?',
    'faq.19.a': 'Consultation sessions may be conducted remotely, but coaching sessions are in-person as they are lengthy (5-8 hours) and require direct interaction for the best results.',

    // Category 3: Benefits & Results
    'faq.20.q': 'How can coaching help improve communication skills?',
    'faq.20.a': 'Through developing active listening, learning to ask constructive questions, and improving emotional understanding and non-verbal communication, which positively impacts both personal and professional relationships.',
    'faq.21.q': 'How does coaching help improve work-life balance?',
    'faq.21.a': 'By analyzing priorities and providing time management techniques and effective strategies to achieve balance across different aspects of life without sacrificing any of them.',
    'faq.22.q': 'What are the psychological benefits of coaching?',
    'faq.22.a': 'Increased self-confidence, improved communication with others, enhanced self-awareness, a sense of psychological and social stability, and the ability to make better decisions.',
    'faq.23.q': 'What are the common challenges during coaching sessions?',
    'faq.23.a': 'Not being fully available for sessions, difficulty clearly defining goals at the start, and resistance to change. The coach helps overcome these challenges with patience and professionalism.',
    'faq.24.q': 'What are common obstacles that prevent success?',
    'faq.24.a': 'Fear of change and lack of commitment to the established plan, as well as personal or professional issues that may distract focus from the set goals.',
    'faq.25.q': 'What strategies ensure sustained improvement?',
    'faq.25.a': 'Developing new habits and applying acquired skills regularly, conducting periodic progress evaluations, and continuing to learn and develop even after the program ends.',

    // Category 4: Who Benefits?
    'faq.26.q': 'Can coaching be provided for celebrities, athletes, and media personalities?',
    'faq.26.a': 'Yes, there is a special track for celebrities, athletes, and media personalities focused on achieving goals, building wealth, managing fame, and maintaining balance in their lives.',
    'faq.27.q': 'Can high-income professionals benefit from coaching?',
    'faq.27.a': 'Yes, coaching helps judges, executives, lawyers, doctors, and other high-income professionals in building assets, investing, and growing their wealth strategically.',
    'faq.28.q': 'Is group coaching available for families or boards of directors?',
    'faq.28.a': 'Yes, group coaching is available for families and boards of directors, with the program tailored to the number of participants, shared goals, and required duration.',
    'faq.29.q': 'Does coaching help sports teams and athletes?',
    'faq.29.a': 'Yes, strategies can be provided for stress management, rebuilding confidence, improving performance, and managing finances and investments for athletes and sports teams.',
    'faq.30.q': 'Is coaching beneficial for senior officials and executives?',
    'faq.30.a': 'Yes, coaching is beneficial for leaders and senior executives in developing leadership skills, strategic planning, decision-making, and building effective teams.',
    'faq.31.q': 'Is coaching only for the wealthy?',
    'faq.31.a': 'No, coaching can be beneficial for anyone regardless of financial status. Anyone seeking to achieve their goals and develop their life can benefit from coaching.',
    'faq.32.q': 'Has anyone benefited from coaching?',
    'faq.32.a': 'Yes, many clients have benefited from coaching programs, and no client has ever withdrawn after the first session — a 100% retention rate. You can view client testimonials in the testimonials section.',

    // Category 5: Additional Services
    'faq.33.q': 'How can I find a certified coach?',
    'faq.33.a': 'You can search through professional associations and recognized platforms such as the International Coaching Federation (ICF), while verifying the coach\'s background, certifications, and experience.',
    'faq.34.q': 'Does the coach help in selecting consultants?',
    'faq.34.a': 'Yes, the coach helps in selecting the best consultants, lawyers, doctors, and other specialists based on his experience and professional network.',
    'faq.35.q': 'Can the coach assist in purchasing real estate assets?',
    'faq.35.a': 'Yes, the coach can assist with that given his extensive experience of over 14 years in real estate development, investment, and management.',
    'faq.36.q': 'Can the coach help review agreements before completion?',
    'faq.36.a': 'Yes, especially in business, finance, and wealth matters. The coach helps review and evaluate agreements and contracts to ensure the best interests are served.',

    // Category 6: Payment & Policies
    'faq.37.q': 'How are costs paid?',
    'faq.37.a': 'Fees are paid in advance before sessions via bank transfer.',
    'faq.38.q': 'Is there a guarantee for session success?',
    'faq.38.a': 'Yes, we offer a Golden Guarantee — you have the option to withdraw after the first session if you feel the program is not right for you.',

    // Blog
    'nav.blog': 'Blog',
    'blog.title': 'Blog',
    'blog.subtitle': 'Articles and insights on leadership, planning, and wealth building',
    'blog.readMore': 'Read More',
    'blog.backToHome': 'Home',
    'blog.backToBlog': 'Back to Blog',
    'blog.noPosts': 'No posts yet',
    'blog.min': 'min read',

    // Footer
    'footer.rights': 'All rights reserved',
  },
} as const;
