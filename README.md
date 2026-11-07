# Arduino AI Coder - تطبيق أندرويد

تطبيق يجيب كود Arduino من طلبك (عربي / تركي / إنكليزي، كتابة أو صوت)، مع القوالب والتوصيل والشرح والسجل،
ويكدر ينسخ الكود أو يشاركه أو يفتح Wokwi للمحاكاة.
**الترجمة والرفع للوحة غير موجودين بالموبايل** (استخدم برنامج الكمبيوتر، أو انسخ الكود لتطبيق ArduinoDroid).

## كيف تطلع ملف APK بدون Android Studio (عن طريق GitHub)

1. ادخل https://github.com/new وسوي مستودع جديد (مثلاً `arduino-ai-app`)، خاص أو عام، واضغط Create.
2. بصفحة المستودع اضغط **uploading an existing file**.
3. فك ضغط الملف، وارفع **كل محتوياته** (ملفات + مجلدات `www` و `tools` و `.github`) بالسحب والإفلات، واضغط **Commit changes**.
   - إذا مجلد `.github` ما انرفع: اضغط **Add file > Create new file**، اكتب بالاسم
     `.github/workflows/build-apk.yml`، والصق محتوى الملف من مجلد `.github/workflows`، واضغط Commit.
4. افتح تاب **Actions**. راح يشتغل "Build APK" لحاله (أول مرة 5-10 دقائق). إذا ما اشتغل: اختاره واضغط **Run workflow**.
5. إذا صار أخضر: افتح التشغيل، ونزّل من **Artifacts** الملف `ArduinoAI-apk` (ملف zip فيه `app-debug.apk`).
6. فك الضغط وانقل الـ APK للموبايل وافتحه. اسمح بالتثبيت من مصدر غير معروف إذا طلب.
   (ممكن Play Protect يعطي تحذير لأن التطبيق مو من المتجر، اضغط Install anyway.)
7. إذا صار أحمر: افتح الخطوة الفاشلة وانسخ آخر 40 سطر من اللوغ وابعثها.

## إذا عندك Android Studio

```
npm ci
npx cap add android
python tools/patch_android.py
npx cap sync android
npx cap open android
```

## ملاحظات
- أول مرة افتح التطبيق: الصق مفتاح Claude API من الإعدادات. المفتاح ينحفظ على الموبايل فقط
  (غير مشفّر)، فاستخدم مفتاح بسقف صرف شهري من console.anthropic.com.
- الصوت يستخدم خدمة Google للكلام الموجودة بالموبايل (يحتاج إنترنت).
- كلمة سر الواي فاي تبدل مكان الرموز `__WIFI_PASS__` فقط عند النسخ أو المشاركة، وما ترسل لـ Claude.
