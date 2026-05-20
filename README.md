# LINE-Liff-Test

LINE LIFF・・INE繝ｭ繧ｰ繧､繝ｳ繝√Ε繝阪Ν荳翫・繧ｦ繧ｧ繝悶い繝励Μ・峨・讀懆ｨｼ逕ｨ繝ｪ繝昴ず繝医Μ縺ｧ縺吶・ 
繝吶・繧ｹ縺ｯ [LINE LIFF v2 Starter・・anilla・云(https://github.com/line/line-liff-v2-starter) 縺ｧ縺吶・

## 繝ｪ繝昴ず繝医Μ讒区・

```
LINE-Liff-Test/
笏懌楳笏 .github/workflows/pages.yml   # GitHub Pages 閾ｪ蜍輔ョ繝励Ο繧､
笏懌楳笏 README.md
笏懌楳笏 package.json
笏懌楳笏 netlify.toml                  # Netlify 蛻ｩ逕ｨ譎ゅ・縺ｿ・井ｻｻ諢擾ｼ・
笏披楳笏 src/vanilla/                   # LIFF 繧｢繝励Μ譛ｬ菴・
    笏懌楳笏 .env.example
    笏懌楳笏 index.js
    笏懌楳笏 index.html
    笏披楳笏 webpack.config.js
```

## GitHub Pages 縺ｧ HTTPS URL 繧堤｢ｺ菫昴☆繧具ｼ医＞縺｡縺ｰ繧捺焔譌ｩ縺・ｼ・

**繝励Ο繧ｸ繧ｧ繧ｯ繝育畑 Pages** 縺ｮ URL 縺ｯ谺｡縺ｮ蠖｢縺ｫ縺ｪ繧翫∪縺吶・

`https://<GitHub繝ｦ繝ｼ繧ｶ繝ｼ蜷・.github.io/<繝ｪ繝昴ず繝医Μ蜷・/`

萓・ 繝ｪ繝昴ず繝医Μ蜷阪′ `LINE-Liff-Test` 縺ｮ蝣ｴ蜷・ 
竊・`https://縺ゅ↑縺溘・繝ｦ繝ｼ繧ｶ繝ｼ蜷・github.io/LINE-Liff-Test/`  
・域忰蟆ｾ縺ｮ `/` 縺ｯ LIFF 縺ｮ繧ｨ繝ｳ繝峨・繧､繝ｳ繝医↓譖ｸ縺上→縺阪ｂ蜷ｫ繧√ｋ縺ｨ辟｡髮｣縺ｧ縺呻ｼ・

### 謇矩・

1. 縺薙・繝輔か繝ｫ繝繧・GitHub 縺ｫ **蜷榊燕莉倥″繝ｪ繝昴ず繝医Μ縺ｨ縺励※** push 縺吶ｋ・・LINE-Liff-Test` 縺ｧ縺ｪ縺上※繧ょ庄縲・*URL 縺ｮ `/繝ｪ繝昴ず繝医Μ蜷・` 縺ｨ荳閾ｴ縺輔○繧句錐蜑・*縺後♀縺吶☆繧・ｼ峨・

2. 繝ｪ繝昴ず繝医Μ縺ｮ **Settings 竊・Secrets and variables 竊・Actions** 縺ｧ **Repository secret** `LIFF_ID` 繧定ｿｽ蜉縺吶ｋ・・INE Developers 縺ｧ逋ｺ陦後＠縺・LIFF ID・峨・ 
   CI 縺ｮ繝薙Ν繝画凾縺ｫ webpack 縺ｫ貂｡縺輔ｌ縲√・繝ｼ繧ｸ蜀・・ `liff.init()` 縺ｫ蝓九ａ霎ｼ縺ｾ繧後∪縺吶・

3. **Settings 竊・Pages** 縺ｧ **Source** 繧・**GitHub Actions** 縺ｫ縺吶ｋ縲・

4. `main` 繝悶Λ繝ｳ繝√↓ push 縺吶ｋ縺ｨ縲～.github/workflows/pages.yml` 縺瑚ｵｰ繧翫し繧､繝医′蜈ｬ髢九＆繧後ｋ縲・ctions 縺ｮ **Deploy to GitHub Pages** 縺檎ｷ代↓縺ｪ縺｣縺溘ｉ縲∝酔逕ｻ髱｢縺ｫ陦ｨ遉ｺ縺輔ｌ繧・URL・医∪縺溘・荳翫・隕丞援・峨ｒ髢九＞縺ｦ遒ｺ隱阪☆繧九・

5. LINE Developers 縺ｮ **LIFF 縺ｮ繧ｨ繝ｳ繝峨・繧､繝ｳ繝・URL** 縺ｫ縲・*謇矩・・ URL 縺ｨ螳悟・荳閾ｴ縺吶ｋ HTTPS** 繧定ｨｭ螳壹☆繧九・

> **繝阪ャ繝医Ρ繝ｼ繧ｯ繝代せ縺ｫ縺､縺・※:** webpack 縺ｮ `publicPath` 縺ｯ迺ｰ蠅・､画焚 `BASE_PATH` 縺ｧ蛻・ｊ譖ｿ縺医※縺・∪縺吶・I 縺ｧ縺ｯ閾ｪ蜍輔〒 `/${{ github.event.repository.name }}/` 縺ｫ縺ｪ繧九・縺ｧ縲√Μ繝昴ず繝医Μ繧偵Μ繝阪・繝縺励◆縺ゅ→繧・**蜀榊ｺｦ push縺吶ｌ縺ｰ繝薙Ν繝峨・霑ｽ蠕薙＠縺ｾ縺・*縲・

### 繝ｦ繝ｼ繧ｶ繝ｼ蜷阪し繧､繝茨ｼ医Ν繝ｼ繝医・縺ｿ・峨〒蜈ｬ髢九☆繧句ｴ蜷・

`https://<繝ｦ繝ｼ繧ｶ繝ｼ蜷・.github.io/` 縺ｫ繧｢繝励Μ縺縺醍ｽｮ縺阪◆縺・ｴ蜷医・縲√◎縺ｮ逕ｨ縺ｮ **`繝ｦ繝ｼ繧ｶ繝ｼ蜷・github.io` 蜷榊燕縺ｮ繝ｪ繝昴ず繝医Μ**縺ｫ縺励√Ρ繝ｼ繧ｯ繝輔Ο繝ｼ蜀・・繝薙Ν繝峨↓ `BASE_PATH=/` 繧貞崋螳壹☆繧九↑縺ｩ蛻･蟇ｾ蠢懊↓縺ｪ繧翫∪縺吶ゅ％縺ｮ繝ｪ繝昴ず繝医Μ縺ｯ縲後Μ繝昴ず繝医Μ蜷堺ｻ倥″縲阪・繝励Ο繧ｸ繧ｧ繧ｯ繝・Pages 蜷代￠縺ｧ縺吶・

## 蛻晄悄繧ｻ繝・ヨ繧｢繝・・・・INE・・

### 1. LINE Developers 縺ｧ繝√Ε繝阪Ν縺ｨ LIFF 繧剃ｽ懊ｋ

LIFF 縺ｯ **LINE繝ｭ繧ｰ繧､繝ｳ** 縺ｮ繝√Ε繝阪Ν縺ｫ霑ｽ蜉縺励∪縺呻ｼ・essaging API 繝√Ε繝阪Ν縺ｧ縺ｯ霑ｽ蜉縺ｧ縺阪∪縺帙ｓ・峨・

1. [LINE Developers Console](https://developers.line.biz/console/) 縺ｫ繝ｭ繧ｰ繧､繝ｳ
2. **繝励Ο繝舌う繝繝ｼ**繧剃ｽ懈・・域悴菴懈・縺ｮ蝣ｴ蜷茨ｼ・
3. **LINE繝ｭ繧ｰ繧､繝ｳ** 繝√Ε繝阪Ν繧剃ｽ懈・
4. 縺昴・繝√Ε繝阪Ν 竊・**LIFF** 竊・**霑ｽ蜉**
5. **繧ｨ繝ｳ繝峨・繧､繝ｳ繝・URL** 縺ｫ縲∽ｸ願ｨ・GitHub Pages 縺ｮ URL・・/繝ｪ繝昴ず繝医Μ蜷・` 縺ｧ邨ゅ∴繧具ｼ峨ｒ蜈･蜉・

| 鬆・岼 | 髢狗匱譎ゅ・萓・|
|------|------------|
| LIFF app name | Liff Test 縺ｪ縺ｩ |
| Size | Full |
| Endpoint URL | `https://<user>.github.io/LINE-Liff-Test/` |
| Scope | `profile`・亥ｿ・ｦ√↓蠢懊§縺ｦ霑ｽ蜉・・|

6. **LIFF ID** 繧偵さ繝斐・縺励；itHub 縺ｮ secret `LIFF_ID` 縺ｨ縲√Ο繝ｼ繧ｫ繝ｫ逕ｨ縺ｮ `.env` 縺ｫ險ｭ螳壹☆繧九・

### 2. 繝ｭ繝ｼ繧ｫ繝ｫ縺ｮ迺ｰ蠅・､画焚

```powershell
cd src\vanilla
copy .env.example .env
```

`.env`:

```env
LIFF_ID=1234567890-AbCdEfGh
```

### 3. 繝ｭ繝ｼ繧ｫ繝ｫ髢狗匱

繝ｫ繝ｼ繝医°繧・

```powershell
npm run install:app
npm run dev
```

繝悶Λ繧ｦ繧ｶ縺ｧ `http://localhost:3000` 繧帝幕縺阪∪縺吶・

**GitHub 縺ｨ蜷後§繧ｵ繝悶ョ繧｣繝ｬ繧ｯ繝医Μ讒区・縺ｧ遒ｺ隱阪＠縺溘＞蝣ｴ蜷・*・育怐逡･蜿ｯ・・

```powershell
cd src\vanilla
$env:BASE_PATH="/LINE-Liff-Test/"
npm run dev
```

・・LINE-Liff-Test` 縺ｯ螳滄圀縺ｮ GitHub 縺ｮ繝ｪ繝昴ず繝医Μ蜷阪↓蜷医ｏ縺帙※縺上□縺輔＞縲ゑｼ・

### 4. HTTPS 縺ｧ LIFF 縺ｨ縺励※遒ｺ隱・

1. Pages 縺ｮ URL 縺ｨ LIFF 縺ｮ繧ｨ繝ｳ繝峨・繧､繝ｳ繝医′荳閾ｴ縺励※縺・ｋ縺薙→縲√ｒ遒ｺ隱阪☆繧九・
2. 繧ｹ繝槭・縺ｮ LINE 縺ｧ `https://liff.line.me/<LIFF_ID>` 繧帝幕縺・※蜍穂ｽ懃｢ｺ隱阪☆繧九・

## Netlify 縺ｧ繝・・繝ｭ繧､縺吶ｋ蝣ｴ蜷茨ｼ亥挨謇区ｮｵ・・

繝峨Γ繧､繝ｳ縺ｮ繝ｫ繝ｼ繝・`/` 縺ｧ驟堺ｿ｡縺吶ｋ蝣ｴ蜷医・ `BASE_PATH` 縺ｯ譛ｪ險ｭ螳壹〒繝薙Ν繝会ｼ域里螳壹〒 `/`・峨〒蝠城｡後≠繧翫∪縺帙ｓ縲・

1. 繝ｪ繝昴ず繝医Μ繧・Netlify 縺ｫ謗･邯壹＠縲∫腸蠅・､画焚 `LIFF_ID` 繧定ｨｭ螳・
2. LIFF 縺ｮ繧ｨ繝ｳ繝峨・繧､繝ｳ繝医ｒ Netlify 縺ｮ `https://...` 縺ｫ蜷医ｏ縺帙ｋ

`netlify.toml` 縺後≠繧後・縲√◎縺ｮ繝薙Ν繝峨さ繝槭Φ繝峨↓蜷医ｏ縺帙※縺上□縺輔＞縲・

## 繧医￥縺ゅｋ縺､縺ｾ縺壹″

| 逞・憾 | 蟇ｾ蜃ｦ |
|------|------|
| Pages 縺ｯ髢九￥縺檎悄縺｣逋ｽ繝ｻJS 縺・404 | 繝ｪ繝昴ず繝医Μ蜷阪→ CI 縺ｮ `BASE_PATH` 縺御ｸ閾ｴ縺励※縺・ｋ縺狗｢ｺ隱阪ゅΡ繝ｼ繧ｯ繝輔Ο繝ｼ縺ｯ繝ｪ繝昴ず繝医Μ蜷阪°繧芽・蜍戊ｨｭ螳・|
| `liff.init()` 縺悟､ｱ謨・| 繧ｨ繝ｳ繝峨・繧､繝ｳ繝・URL 縺ｨ Pages 縺ｮ螳・URL 縺悟ｮ悟・荳閾ｴ縺具ｼ・/繝ｪ繝・` 縺ｮ譛臥┌縲？TTPS・・|
| CI 縺ｧ繝薙Ν繝峨・騾壹ｋ縺・LIFF 縺悟虚縺九↑縺・| GitHub Secrets 縺ｮ `LIFF_ID` 縺ｨ縲√さ繝ｳ繧ｽ繝ｼ繝ｫ縺ｮ LIFF 縺悟酔縺倥メ繝｣繝阪Ν縺ｮ繧ゅ・縺狗｢ｺ隱・|

## 髢｢騾｣繝ｪ繝昴ず繝医Μ

- [PersonalAgentRep](../PersonalAgentRep) 窶・Google 騾｣謳ｺ PWA

## 繝ｩ繧､繧ｻ繝ｳ繧ｹ

`src/vanilla` 莉･荳九↓縺ｯ LINE LIFF Starter 逕ｱ譚･縺ｮ繧ｳ繝ｼ繝峨ｒ蜷ｫ縺ｿ縺ｾ縺吶ＡLICENSE.txt` 繧貞盾辣ｧ縺励※縺上□縺輔＞縲・
