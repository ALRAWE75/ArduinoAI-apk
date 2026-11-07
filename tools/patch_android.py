"""يعدّل AndroidManifest.xml بعد 'npx cap add android' (آمن للتشغيل أكثر من مرة)."""
import pathlib
import sys

path = pathlib.Path("android/app/src/main/AndroidManifest.xml")
if not path.exists():
    sys.exit("AndroidManifest.xml not found - run 'npx cap add android' first")

xml = path.read_text(encoding="utf-8")

QUERIES = """    <queries>
        <intent>
            <action android:name="android.speech.RecognitionService" />
        </intent>
    </queries>
"""
MIC = '    <uses-permission android:name="android.permission.RECORD_AUDIO" />\n'

if "android.speech.RecognitionService" not in xml:
    xml = xml.replace("    <!-- Permissions -->", QUERIES + "\n    <!-- Permissions -->", 1)
if "android.permission.RECORD_AUDIO" not in xml:
    xml = xml.replace('    <uses-permission android:name="android.permission.INTERNET" />',
                      '    <uses-permission android:name="android.permission.INTERNET" />\n' + MIC, 1)

assert "RecognitionService" in xml and "RECORD_AUDIO" in xml, "manifest patch failed"
path.write_text(xml, encoding="utf-8")
print("AndroidManifest.xml patched")
