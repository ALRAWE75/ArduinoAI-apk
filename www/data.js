/* مولّد تلقائياً من ملفات البرنامج المكتبي - لا تعدّل يدوياً */
window.I18N = {
 "en": {
  "board": "Board:",
  "port": "Port:",
  "detect": "Detect board",
  "settings": "Settings",
  "language": "Language:",
  "prompt_label": "What do you want? (any language)",
  "get_code": "Get code",
  "modify": "Modify current code",
  "compile": "Compile (auto-fix)",
  "upload": "Upload to board",
  "mic": "Mic",
  "mic_stop": "Stop",
  "templates": "Templates:",
  "templates_ph": "Choose a template...",
  "simulate": "Simulate (Wokwi)",
  "add_ota": "Add WiFi OTA",
  "upload_via": "Upload via:",
  "via_usb": "USB",
  "via_wifi": "WiFi (OTA)",
  "ip": "IP:",
  "tab_code": "Code",
  "tab_wiring": "Wiring",
  "tab_expl": "Explanation",
  "tab_serial": "Serial Monitor",
  "tab_hist": "History",
  "log": "Log",
  "ready": "Ready",
  "detecting": "Detecting boards...",
  "asking": "Asking Claude...",
  "code_ready": "Code ready",
  "preparing": "Preparing arduino-cli...",
  "compiling": "Compiling...",
  "compiled_ok": "Compiled OK",
  "compile_failed": "Compile failed",
  "uploading": "Uploading...",
  "uploaded": "Uploaded",
  "upload_failed": "Upload failed",
  "error": "Error",
  "listening": "Listening... press Stop when done",
  "recognizing": "Recognizing speech...",
  "baud": "Baud:",
  "connect": "Connect",
  "disconnect": "Disconnect",
  "clear": "Clear",
  "send": "Send",
  "load_selected": "Load selected",
  "dlg_title": "Arduino AI",
  "write_first": "Write what you want first.",
  "choose_board": "Choose a board first.",
  "need_code_board": "You need code and a board first.",
  "need_code_board_port": "Need code, board and port.",
  "need_ip": "Enter the board's IP address for WiFi upload.",
  "need_esp": "WiFi OTA works with ESP32 / ESP8266 boards only. Choose one first.",
  "need_code": "There is no code yet. Press Get code first.",
  "ota_hint": "OTA added. Upload once by USB first, then switch 'Upload via' to WiFi and enter the board IP (shown in Serial Monitor).",
  "api_key": "Claude API key (sk-ant-...):",
  "wifi_ssid": "WiFi name (for ESP32/ESP8266):",
  "wifi_pass": "WiFi password:",
  "ota_pass": "OTA upload password (optional):",
  "ota_host": "Board hostname for OTA:",
  "paste": "Paste",
  "show_key": "Show",
  "save": "Save",
  "clipboard_empty": "Clipboard is empty. Copy the text first.",
  "key_saved": "Settings saved on this computer.",
  "sim_copied": "Code copied. In Wokwi: click sketch.ino, press Ctrl+A then Ctrl+V. Add the parts listed in the Wiring tab.",
  "voice_missing": "Voice needs: pip install sounddevice SpeechRecognition  (run.bat installs them).",
  "voice_fail": "Could not understand the speech. Try again.",
  "voice_net": "Voice recognition needs an internet connection.",
  "pyserial_missing": "pyserial is missing. Run: pip install pyserial",
  "choose_port": "Choose a port first."
 },
 "ar": {
  "board": "اللوحة:",
  "port": "المنفذ:",
  "detect": "اكتشاف اللوحة",
  "settings": "الإعدادات",
  "language": "اللغة:",
  "prompt_label": "شنو تريد؟ (بأي لغة)",
  "get_code": "جيب الكود",
  "modify": "عدّل الكود الحالي",
  "compile": "ترجمة (إصلاح تلقائي)",
  "upload": "ارفع على اللوحة",
  "mic": "ميكروفون",
  "mic_stop": "إيقاف",
  "templates": "القوالب:",
  "templates_ph": "اختر قالب...",
  "simulate": "محاكاة (Wokwi)",
  "add_ota": "أضف OTA واي فاي",
  "upload_via": "الرفع عن طريق:",
  "via_usb": "USB",
  "via_wifi": "واي فاي (OTA)",
  "ip": "الـ IP:",
  "tab_code": "الكود",
  "tab_wiring": "التوصيل",
  "tab_expl": "الشرح",
  "tab_serial": "مراقب السيريال",
  "tab_hist": "السجل",
  "log": "السجل التقني",
  "ready": "جاهز",
  "detecting": "جاري اكتشاف اللوحات...",
  "asking": "جاري سؤال Claude...",
  "code_ready": "الكود جاهز",
  "preparing": "جاري تجهيز arduino-cli...",
  "compiling": "جاري الترجمة...",
  "compiled_ok": "تمت الترجمة بنجاح",
  "compile_failed": "فشلت الترجمة",
  "uploading": "جاري الرفع...",
  "uploaded": "تم الرفع",
  "upload_failed": "فشل الرفع",
  "error": "خطأ",
  "listening": "أسمعك... اضغط إيقاف إذا خلصت",
  "recognizing": "جاري تحويل الكلام لنص...",
  "baud": "السرعة:",
  "connect": "اتصال",
  "disconnect": "قطع الاتصال",
  "clear": "مسح",
  "send": "إرسال",
  "load_selected": "تحميل المحدد",
  "dlg_title": "Arduino AI",
  "write_first": "اكتب شنو تريد أول.",
  "choose_board": "اختر اللوحة أول.",
  "need_code_board": "تحتاج كود ولوحة أول.",
  "need_code_board_port": "تحتاج كود ولوحة ومنفذ.",
  "need_ip": "اكتب عنوان IP مال اللوحة للرفع عبر الواي فاي.",
  "need_esp": "رفع OTA يشتغل مع لوحات ESP32 و ESP8266 فقط. اختر وحدة منهم أول.",
  "need_code": "ما في كود بعد. اضغط جيب الكود أول.",
  "ota_hint": "تمت إضافة OTA. ارفع مرة وحدة بالـ USB أول، بعدها غيّر 'الرفع عن طريق' إلى واي فاي واكتب IP اللوحة (يبين بمراقب السيريال).",
  "api_key": "مفتاح Claude API (sk-ant-...):",
  "wifi_ssid": "اسم الواي فاي (لـ ESP32/ESP8266):",
  "wifi_pass": "كلمة سر الواي فاي:",
  "ota_pass": "كلمة سر رفع OTA (اختياري):",
  "ota_host": "اسم اللوحة للـ OTA:",
  "paste": "لصق",
  "show_key": "إظهار",
  "save": "حفظ",
  "clipboard_empty": "الحافظة فارغة. انسخ النص أول.",
  "key_saved": "تم حفظ الإعدادات على هذا الجهاز.",
  "sim_copied": "تم نسخ الكود. بموقع Wokwi: اضغط على sketch.ino ثم Ctrl+A ثم Ctrl+V. أضف القطع المذكورة بتاب التوصيل.",
  "voice_missing": "الصوت يحتاج: pip install sounddevice SpeechRecognition  (ملف run.bat ينزلها).",
  "voice_fail": "ما قدرت أفهم الكلام. جرب مرة ثانية.",
  "voice_net": "التعرف على الصوت يحتاج إنترنت.",
  "pyserial_missing": "مكتبة pyserial ناقصة. شغّل: pip install pyserial",
  "choose_port": "اختر المنفذ أول."
 },
 "tr": {
  "board": "Kart:",
  "port": "Port:",
  "detect": "Kartı algıla",
  "settings": "Ayarlar",
  "language": "Dil:",
  "prompt_label": "Ne istiyorsun? (herhangi bir dilde)",
  "get_code": "Kodu getir",
  "modify": "Mevcut kodu düzenle",
  "compile": "Derle (otomatik düzelt)",
  "upload": "Karta yükle",
  "mic": "Mikrofon",
  "mic_stop": "Durdur",
  "templates": "Şablonlar:",
  "templates_ph": "Bir şablon seç...",
  "simulate": "Simülasyon (Wokwi)",
  "add_ota": "WiFi OTA ekle",
  "upload_via": "Yükleme yolu:",
  "via_usb": "USB",
  "via_wifi": "WiFi (OTA)",
  "ip": "IP:",
  "tab_code": "Kod",
  "tab_wiring": "Bağlantı",
  "tab_expl": "Açıklama",
  "tab_serial": "Seri Monitör",
  "tab_hist": "Geçmiş",
  "log": "Kayıt",
  "ready": "Hazır",
  "detecting": "Kartlar algılanıyor...",
  "asking": "Claude'a soruluyor...",
  "code_ready": "Kod hazır",
  "preparing": "arduino-cli hazırlanıyor...",
  "compiling": "Derleniyor...",
  "compiled_ok": "Derleme başarılı",
  "compile_failed": "Derleme başarısız",
  "uploading": "Yükleniyor...",
  "uploaded": "Yüklendi",
  "upload_failed": "Yükleme başarısız",
  "error": "Hata",
  "listening": "Dinliyorum... bitince Durdur'a bas",
  "recognizing": "Konuşma metne çevriliyor...",
  "baud": "Hız:",
  "connect": "Bağlan",
  "disconnect": "Bağlantıyı kes",
  "clear": "Temizle",
  "send": "Gönder",
  "load_selected": "Seçileni yükle",
  "dlg_title": "Arduino AI",
  "write_first": "Önce ne istediğini yaz.",
  "choose_board": "Önce bir kart seç.",
  "need_code_board": "Önce kod ve kart gerekli.",
  "need_code_board_port": "Kod, kart ve port gerekli.",
  "need_ip": "WiFi ile yükleme için kartın IP adresini yaz.",
  "need_esp": "WiFi OTA yalnızca ESP32 / ESP8266 kartlarla çalışır. Önce birini seç.",
  "need_code": "Henüz kod yok. Önce Kodu getir'e bas.",
  "ota_hint": "OTA eklendi. Önce bir kez USB ile yükle, sonra 'Yükleme yolu'nu WiFi yap ve kartın IP'sini yaz (Seri Monitör'de görünür).",
  "api_key": "Claude API anahtarı (sk-ant-...):",
  "wifi_ssid": "WiFi adı (ESP32/ESP8266 için):",
  "wifi_pass": "WiFi şifresi:",
  "ota_pass": "OTA yükleme şifresi (isteğe bağlı):",
  "ota_host": "OTA için kart adı:",
  "paste": "Yapıştır",
  "show_key": "Göster",
  "save": "Kaydet",
  "clipboard_empty": "Pano boş. Önce metni kopyala.",
  "key_saved": "Ayarlar bu bilgisayara kaydedildi.",
  "sim_copied": "Kod kopyalandı. Wokwi'de sketch.ino'ya tıkla, Ctrl+A sonra Ctrl+V yap. Bağlantı sekmesindeki parçaları ekle.",
  "voice_missing": "Ses için gerekli: pip install sounddevice SpeechRecognition  (run.bat kurar).",
  "voice_fail": "Konuşma anlaşılamadı. Tekrar dene.",
  "voice_net": "Ses tanıma internet bağlantısı gerektirir.",
  "pyserial_missing": "pyserial eksik. Çalıştır: pip install pyserial",
  "choose_port": "Önce bir port seç."
 }
};
window.LANG_NAMES = {
 "ar": "العربية",
 "tr": "Türkçe",
 "en": "English"
};
window.VOICE_LANG = {
 "ar": "ar-IQ",
 "tr": "tr-TR",
 "en": "en-US"
};
window.TEMPLATES = [
 {
  "id": "led_blink",
  "board": null,
  "names": {
   "ar": "LED يومض",
   "tr": "LED yanıp söner",
   "en": "Blinking LED"
  },
  "prompts": {
   "ar": "خلي الـ LED المدمج على البن 13 يومض كل ثانية، وأطبع حالته على السيريال.",
   "tr": "Pin 13'teki dahili LED'i her saniye yanıp söndür ve durumunu seri porta yazdır.",
   "en": "Blink the built-in LED on pin 13 every second and print its state to Serial."
  }
 },
 {
  "id": "button_led",
  "board": null,
  "names": {
   "ar": "زر يشغل LED",
   "tr": "Düğme ile LED",
   "en": "Button controls LED"
  },
  "prompts": {
   "ar": "زر على البن 2 (INPUT_PULLUP) يقلب حالة LED على البن 8 كل ضغطة، مع معالجة اهتزاز الزر (debounce).",
   "tr": "Pin 2'deki düğme (INPUT_PULLUP) her basışta pin 8'deki LED'in durumunu değiştirsin, düğme titreşimi (debounce) engellensin.",
   "en": "A button on pin 2 (INPUT_PULLUP) toggles an LED on pin 8 on each press, with debounce."
  }
 },
 {
  "id": "servo_sweep",
  "board": null,
  "names": {
   "ar": "سيرفو يتحرك 0-180",
   "tr": "Servo 0-180 tarama",
   "en": "Servo sweep 0-180"
  },
  "prompts": {
   "ar": "سيرفو على البن 9 يتحرك من 0 إلى 180 درجة وبالعكس بشكل ناعم وبطيء.",
   "tr": "Pin 9'daki servo 0'dan 180 dereceye ve geri yumuşak ve yavaş şekilde hareket etsin.",
   "en": "A servo on pin 9 sweeps smoothly and slowly from 0 to 180 degrees and back."
  }
 },
 {
  "id": "servo_pot",
  "board": null,
  "names": {
   "ar": "سيرفو بمقاومة متغيرة",
   "tr": "Potansiyometre ile servo",
   "en": "Servo with potentiometer"
  },
  "prompts": {
   "ar": "مقاومة متغيرة (potentiometer) على A0 تتحكم بزاوية سيرفو على البن 9 من 0 إلى 180.",
   "tr": "A0'a bağlı potansiyometre, pin 9'daki servonun açısını 0-180 arasında kontrol etsin.",
   "en": "A potentiometer on A0 controls the angle of a servo on pin 9 from 0 to 180."
  }
 },
 {
  "id": "dht",
  "board": null,
  "names": {
   "ar": "حساس حرارة ورطوبة DHT11",
   "tr": "DHT11 sıcaklık/nem",
   "en": "DHT11 temperature/humidity"
  },
  "prompts": {
   "ar": "اقرأ الحرارة والرطوبة من حساس DHT11 على البن 4 واطبعها على السيريال كل ثانيتين.",
   "tr": "Pin 4'teki DHT11 sensöründen sıcaklık ve nemi oku ve her 2 saniyede seri porta yazdır.",
   "en": "Read temperature and humidity from a DHT11 on pin 4 and print them to Serial every 2 seconds."
  }
 },
 {
  "id": "lcd",
  "board": null,
  "names": {
   "ar": "شاشة LCD I2C 16x2",
   "tr": "LCD I2C 16x2 ekran",
   "en": "LCD I2C 16x2 display"
  },
  "prompts": {
   "ar": "اعرض كلمة مرحبا وعداد ثواني يزيد كل ثانية على شاشة LCD 16x2 بواجهة I2C (العنوان 0x27).",
   "tr": "I2C arayüzlü (adres 0x27) 16x2 LCD ekranda 'Merhaba' yaz ve her saniye artan bir saniye sayacı göster.",
   "en": "Show 'Hello' and a seconds counter that increases every second on a 16x2 I2C LCD (address 0x27)."
  }
 },
 {
  "id": "oled",
  "board": null,
  "names": {
   "ar": "شاشة OLED SSD1306",
   "tr": "OLED SSD1306 ekran",
   "en": "OLED SSD1306 display"
  },
  "prompts": {
   "ar": "اعرض نص وعداد على شاشة OLED مقاس 128x64 بواجهة I2C (SSD1306).",
   "tr": "I2C bağlantılı 128x64 OLED (SSD1306) ekranda bir yazı ve bir sayaç göster.",
   "en": "Show a text line and a counter on a 128x64 I2C OLED (SSD1306)."
  }
 },
 {
  "id": "ultrasonic",
  "board": null,
  "names": {
   "ar": "حساس مسافة HC-SR04",
   "tr": "HC-SR04 mesafe sensörü",
   "en": "HC-SR04 distance sensor"
  },
  "prompts": {
   "ar": "اقرأ المسافة بالسنتيمتر من حساس HC-SR04 (TRIG على 9 و ECHO على 10) واطبعها على السيريال.",
   "tr": "HC-SR04 sensöründen (TRIG pin 9, ECHO pin 10) mesafeyi santimetre olarak oku ve seri porta yazdır.",
   "en": "Read distance in cm from an HC-SR04 (TRIG on 9, ECHO on 10) and print it to Serial."
  }
 },
 {
  "id": "buzzer",
  "board": null,
  "names": {
   "ar": "بازر ينبه عند القرب",
   "tr": "Yaklaşınca uyaran buzzer",
   "en": "Proximity buzzer"
  },
  "prompts": {
   "ar": "بازر على البن 6 يزمر أسرع كلما قربت المسافة من حساس HC-SR04 (TRIG 9، ECHO 10).",
   "tr": "Pin 6'daki buzzer, HC-SR04 sensörüne (TRIG 9, ECHO 10) yaklaştıkça daha hızlı ötsün.",
   "en": "A buzzer on pin 6 beeps faster as an object gets closer to an HC-SR04 (TRIG 9, ECHO 10)."
  }
 },
 {
  "id": "relay",
  "board": null,
  "names": {
   "ar": "ريليه من السيريال",
   "tr": "Seri porttan röle",
   "en": "Relay via Serial"
  },
  "prompts": {
   "ar": "تحكم بريليه على البن 7 من السيريال: أرسل 1 للتشغيل و 0 للإيقاف، واطبع الحالة.",
   "tr": "Pin 7'deki röleyi seri porttan kontrol et: 1 gönderince aç, 0 gönderince kapat ve durumu yazdır.",
   "en": "Control a relay on pin 7 from Serial: send 1 to turn on and 0 to turn off, and print the state."
  }
 },
 {
  "id": "ldr",
  "board": null,
  "names": {
   "ar": "حساس ضوء LDR",
   "tr": "LDR ışık sensörü",
   "en": "LDR light sensor"
  },
  "prompts": {
   "ar": "اقرأ حساس ضوء LDR على A0، وشغّل LED على البن 8 تلقائياً لما يصير الظلام، واطبع القراءة.",
   "tr": "A0'daki LDR'yi oku, ortam karanlık olunca pin 8'deki LED'i otomatik yak ve değeri yazdır.",
   "en": "Read an LDR on A0 and turn on an LED on pin 8 automatically when it gets dark; print the reading."
  }
 },
 {
  "id": "bt_led",
  "board": null,
  "names": {
   "ar": "بلوتوث HC-05 يتحكم بـ LED",
   "tr": "HC-05 Bluetooth ile LED",
   "en": "HC-05 Bluetooth LED control"
  },
  "prompts": {
   "ar": "وحدة HC-05 (TX على 10، RX على 11 عبر SoftwareSerial، سرعة 9600) تستقبل من الموبايل: A تشغل LED على البن 8 و B تطفيه.",
   "tr": "HC-05 modülü (SoftwareSerial ile TX pin 10, RX pin 11, 9600 baud) telefondan alsın: A pin 8'deki LED'i yaksın, B söndürsün.",
   "en": "An HC-05 (SoftwareSerial TX on 10, RX on 11, 9600 baud) receives from a phone: 'A' turns on an LED on pin 8, 'B' turns it off."
  }
 },
 {
  "id": "bt_servo_rx",
  "board": null,
  "names": {
   "ar": "مستقبل بلوتوث يحرك سيرفو",
   "tr": "Bluetooth servo alıcı",
   "en": "Bluetooth servo receiver"
  },
  "prompts": {
   "ar": "مستقبل: HC-05 (TX على 10، RX على 11، سرعة 9600) يستقبل زاوية رقمية من 0 إلى 180 منتهية بسطر جديد، ويحرك سيرفو على البن 9. اشرح بالشرح كيف أربط وحدتين HC-05 مع بعض (Master/Slave).",
   "tr": "Alıcı: HC-05 (TX pin 10, RX pin 11, 9600 baud) satır sonu ile biten 0-180 arası bir açı alsın ve pin 9'daki servoyu hareket ettirsin. Açıklamada iki HC-05'in nasıl eşleştirileceğini (Master/Slave) anlat.",
   "en": "Receiver: an HC-05 (TX on 10, RX on 11, 9600 baud) receives a numeric angle 0-180 ending with a newline and moves a servo on pin 9. Explain in the explanation how to pair two HC-05 modules (Master/Slave)."
  }
 },
 {
  "id": "joystick_tx",
  "board": null,
  "names": {
   "ar": "كونترول جويستيك يرسل زاوية",
   "tr": "Joystick uzaktan kumanda",
   "en": "Joystick remote transmitter"
  },
  "prompts": {
   "ar": "مرسل: جويستيك شيلد، محور X على A0، يحوله لزاوية من 0 إلى 180 ويرسلها كل 50 مللي ثانية عبر HC-05 (TX على 10، RX على 11، سرعة 9600) كرقم منتهي بسطر جديد.",
   "tr": "Verici: joystick shield, X ekseni A0'da, 0-180 arası açıya çevirsin ve her 50 ms'de HC-05 (TX pin 10, RX pin 11, 9600 baud) ile satır sonu içeren sayı olarak göndersin.",
   "en": "Transmitter: a joystick shield, X axis on A0, mapped to an angle 0-180 and sent every 50 ms through an HC-05 (TX on 10, RX on 11, 9600 baud) as a number ending with a newline."
  }
 },
 {
  "id": "esp32_web",
  "board": "ESP32 Dev Module",
  "names": {
   "ar": "ESP32 صفحة ويب تتحكم بـ LED",
   "tr": "ESP32 web sayfası ile LED",
   "en": "ESP32 web page LED control"
  },
  "prompts": {
   "ar": "ESP32 يتصل بالواي فاي ويشغل صفحة ويب فيها زرين لتشغيل وإطفاء LED على البن 2، واطبع عنوان IP على السيريال.",
   "tr": "ESP32 WiFi'ye bağlansın ve pin 2'deki LED'i açıp kapatan iki düğmeli bir web sayfası sunsun; IP adresini seri porta yazdır.",
   "en": "An ESP32 connects to WiFi and serves a web page with two buttons to turn an LED on pin 2 on and off; print the IP address to Serial."
  }
 }
];
window.BOARDS = {
 "Arduino Uno": "arduino:avr:uno",
 "Arduino Nano": "arduino:avr:nano",
 "Arduino Nano (Old Bootloader)": "arduino:avr:nano:cpu=atmega328old",
 "Arduino Mega 2560": "arduino:avr:mega:cpu=atmega2560",
 "Arduino Leonardo": "arduino:avr:leonardo",
 "Arduino Pro Mini 5V": "arduino:avr:pro:cpu=16MHzatmega328",
 "ESP32 Dev Module": "esp32:esp32:esp32",
 "ESP8266 NodeMCU": "esp8266:esp8266:nodemcuv2",
 "Raspberry Pi Pico": "rp2040:rp2040:rpipico",
 "Arduino Nano ESP32": "arduino:esp32:nano_nora"
};
window.SYSTEM_PROMPT = "You are an expert Arduino / embedded developer inside a desktop tool.\nThe user describes what they want in any language (Arabic, Turkish, English...).\nYou must answer ONLY with these tagged sections (no text outside them):\n\n<code>\nthe complete, compilable .ino sketch (setup() and loop()), with short comments\nin the user's language\n</code>\n<libraries>\none Arduino Library Manager name per line (exact names, e.g. Servo, DHT sensor library,\nAdafruit Unified Sensor). Leave empty if only built-in/core libraries are used.\n</libraries>\n<wiring>\na short wiring list, one connection per line, e.g. \"Servo signal -> pin 9\".\nWrite it in the user's language.\n</wiring>\n<explanation>\na short explanation of how the code works, in the user's language.\n</explanation>\n\nRules:\n- Target the board given in the request (fqbn). Use pins and APIs valid for that board.\n- Use Serial.begin(9600) for debugging unless the user asks otherwise.\n- Do not use markdown fences inside the tags.\n- Never invent library names; prefer built-in libraries when possible.\n- For ESP32/ESP8266 sketches that use WiFi, NEVER hardcode credentials. Use exactly these\n  string literals as placeholders: \"__WIFI_SSID__\", \"__WIFI_PASS__\", \"__OTA_HOST__\",\n  \"__OTA_PASS__\". The tool substitutes the real values before compiling.";
window.OTA_REQUEST = "Add WiFi OTA update support (ArduinoOTA) to this sketch and keep ALL existing behavior. Use the placeholders \"__WIFI_SSID__\", \"__WIFI_PASS__\", \"__OTA_HOST__\", \"__OTA_PASS__\" (call ArduinoOTA.setPassword only if the OTA password is not empty). Connect to WiFi in setup(), print the IP address to Serial, call ArduinoOTA.handle() in loop(), and avoid long blocking delay() calls that would starve it (use millis()).";
window.SECRET_TOKENS = {
 "__WIFI_SSID__": "wifi_ssid",
 "__WIFI_PASS__": "wifi_pass",
 "__OTA_HOST__": "ota_host",
 "__OTA_PASS__": "ota_pass"
};
window.WOKWI_SLUGS = {
 "arduino:avr:uno": "arduino-uno",
 "arduino:avr:nano": "arduino-nano",
 "arduino:avr:mega": "arduino-mega",
 "esp32:esp32:esp32": "esp32",
 "rp2040:rp2040:rpipico": "pi-pico"
};
window.DEFAULT_MODEL = "claude-sonnet-5-5";
