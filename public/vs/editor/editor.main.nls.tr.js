/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.10.1(ebbf400719be21761361804bf63fb3916e64a845)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.tr", {
    "vs/base/browser/ui/actionbar/actionbar": ["{0} ({1})"],
    "vs/base/browser/ui/aria/aria": ["{0} (tekrar oluştu)"],
    "vs/base/browser/ui/findinput/findInput": ["giriş"],
    "vs/base/browser/ui/findinput/findInputCheckboxes": [
        "Büyük/Küçük Harf Eşleştir",
        "Sözcüğün Tamamını Eşleştir",
        "Normal İfade Kullan"
    ],
    "vs/base/browser/ui/inputbox/inputBox": ["Hata: {0}", "Uyarı: {0}", "Bilgi: {0}"],
    "vs/base/common/keybindingLabels": [
        "Ctrl",
        "Shift",
        "Alt",
        "Windows",
        "Control",
        "Shift",
        "Alt",
        "Command",
        "Control",
        "Shift",
        "Alt",
        "Windows"
    ],
    "vs/base/common/severity": ["Hata", "Uyarı", "Bilgi"],
    "vs/base/parts/quickopen/browser/quickOpenModel": ["{0}, seçici", "seçici"],
    "vs/base/parts/quickopen/browser/quickOpenWidget": [
        "Hızlı seçici. Sonuçları daraltmak için yazmaya başlayın.",
        "Hızlı Seçici"
    ],
    "vs/base/parts/tree/browser/treeDefaults": ["Daralt"],
    "vs/editor/browser/widget/diffEditorWidget": ["Bir dosya çok büyük olduğu için dosyaları karşılaştıramazsınız."],
    "vs/editor/browser/widget/diffReview": [
        "Kapat",
        "Farklılık {0}/{1}: orijinal {2}, {3} satırları, değiştirilen {4}, {5} satırları",
        "boş",
        "orijinal {0}, değiştirilen {1}: {2}",
        "+ değiştirilen {0}: {1}",
        "- orijinal {0}: {1}",
        "Sonraki Farka Git",
        "Sonraki Farka Git"
    ],
    "vs/editor/common/config/commonEditorConfig": [
        "Düzenleyici",
        "Yazı tipi ailesini denetler.",
        "Yazı tipi kalınlığını denetler.",
        "Yazı tipi boyutunu piksel olarak denetler.",
        "Satır yüksekliğini denetler. lineHeight değerini, fontSize değeri kullanarak hesaplamak için 0 girin.",
        "Harfler arası boşluğu pixel olarak denetler.",
        "Satır numaralarının görüntülenmesini denetler. Olası değerler 'on', 'off' ve 'relative'dir. 'relative' satırların geçerli imleç konumundan uzaklıklarını gösterir.",
        "Dikey cetvellerin gösterileceği sütunlar",
        "Sözcüklerle ilgili gezinti veya işlem yaparken kelime ayırıcı olarak kullanılacak karakterler",
        "Bir sekmenin eşit olduğu boşluk sayısı. Bu ayar, `editor.detectIndentation` açıkken dosya içeriğine bağlı olarak geçersiz kılınır.",
        "'sayı' bekleniyor. \"auto\" değerinin `editor.detectIndentation` ile değiştirildiğini unutmayın.",
        "Tab tuşuna basınca boşluk ekle. Bu ayar, `editor.detectIndentation` açıkken dosya içeriğine bağlı olarak geçersiz kılınır.",
        "'boole' bekleniyor. \"auto\" değerinin `editor.detectIndentation` ile değiştirildiğini unutmayın.",
        "Bir dosyayı açarken, `editor.tabSize` ve `editor.insertSpaces` dosya içeriğine bağlı olarak algılanır.",
        "Seçimlerin köşelerinin yuvarlak olup olmayacağını denetler",
        "Düzenleyicinin son satırın ötesine ilerleyip ilerlemeyeceğini denetler",
        "Mini haritanın gösterilip gösterilmeyeceğini denetler",
        "Mini harita kaydıracının otomatik olarak gizlenip gizlenmeyeceğini denetler.",
        "(Renk blokları yerine) Bir satırdaki gerçek harfleri göster",
        "Hazırlanacak mini haritanın azami genişliğini belirli sayıda sütunla sınırla",
        "Bulma Araç Çubuğu'ndaki arama metninin, düzenleyicideki seçili alandan beslenmesini denetler",
        "Seçimde bul işaretçisinin, editördeki metnin birden çok karakteri veya satırı seçildiğinde açılmasını denetler.",
        "Satırlar hiçbir zaman bir sonraki satıra kaydırılmayacak.",
        "Satırlar görüntü alanı genişliğinde bir sonraki satıra kaydırılacak.",
        "Satırlar `editor.wordWrapColumn` değerinde bir sonraki satıra kaydırılacak.",
        "Satırlar en düşük görüntü alanı genişliğinde ve `editor.wordWrapColumn` değerinde bir sonraki satıra kaydırılacak.",
        "Satırların bir sonraki satıra nasıl kaydırılacağını denetler. Seçenekler:\n - 'off' (kaydırmayı devre dışı bırak),\n - 'on' (görüntü alanında kaydır),\n - 'wordWrapColumn' (`editor.wordWrapColumn` değerinde kaydır) veya\n - 'bounded' (en düşük görüntü alanı genişliğinde ve `editor.wordWrapColumn` değerinde kaydır).",
        "`editor.wordWrap` ögesi, 'wordWrapColumn' veya 'bounded' iken düzenleyicinin kaydırma sütununu denetler.",
        "Kaydırılan satır girintisini denetler. 'none', 'same' veya 'indent' değerlerinden biri olabilir.",
        "Fare tekerleği kaydırma olaylarında `deltaX` ve `deltaY` üzerinde kullanılan bir çarpan",
        "Windows ve Linux'da `Control` ve OSX'de `Command` ile eşleşir.",
        "Windows ve Linux'da `Alt` ve OSX'de `Option` ile eşleşir.",
        "Fare ile birden çok imleç eklenmesinde kullanılacak değiştirici. `ctrlCmd` Windows ve Linux'da `Control` ve OSX'de `Command` ile eşleşir. Tanıma Git ve Bağlantıyı Aç fare hareketleri, birden çok imleç değiştiricisi ile çakışmayacak şekilde uyum sağlarlar.",
        "Dizelerin içinde hızlı önerileri etkinleştir.",
        "Yorumların içinde hızlı önerileri etkinleştir.",
        "Dizeler ve yorumlar dışında hızlı önerileri etkinleştirin.",
        "Yazarken önerilerin otomatik olarak gösterilip gösterilmeyeceğini denetler",
        "Hızlı önerilerin gösterilmesinden önce kaç ms bekleneceğini denetler",
        "Siz tuşlara bastıkça parametre belgelerini ve tür bilgisini gösteren açılır pencereyi etkinleştirir.",
        "Düzenleyicinin köşeli ayracı açtıktan sonra otomatik olarak kapatıp kapatmayacağını denetler",
        "Düzenleyicinin satırı yazıldıktan sonra otomatik biçimlendirip biçimlendirmeyeceğini denetler",
        "Düzenleyicinin yapıştırılan içeriği otomatik olarak biçimlendirip biçimlendirmeyeceğini denetler. Bir biçimlendirici mevcut olmalı ve belgede bir aralığı biçimlendirebilmelidir.",
        "Düzenleyicinin, kullanıcılar tuşlara bastığında, satırları yapıştırdığında veya taşıdığında girintiyi otomatik olarak ayarlayıp ayarlamayacağını denetler. Dilin girintileme kuralları mevcut olmalıdır.",
        "Tetikleyici karakterler yazılırken otomatik olarak öneri gösterilip gösterilmeyeceğini denetler",
        "'Tab' tuşuna ek olarak - önerilerin 'Enter' tuşuna basıldığında kabul edilmesini denetler. Yeni satır ekleme ya da öneri kabul etme arasındaki belirsizlikten kaçınmaya yardımcı olur. 'smart' değeri, bir öneri metinsel değişiklik yapıyorsa, onu sadece Enter tuşu ile kabul etmeyi ifade eder",
        "Önerilerin tamamlama karakterlerinde kabul edilip edilmeyeceğini denetler. Örnek olarak; JavaScript'te noktalı virgül(';') öneri kabul eden ve o karakteri giren tamamlama karakteri olabilir.",
        "Parçacık önerilerini diğer önerilerin üstünde göster.",
        "Parçacık önerilerini diğer önerilerin altında göster.",
        "Parçacık önerilerini diğer önerilerle birlikte göster.",
        "Parçacık önerilerini gösterme.",
        "Parçacıkların diğer önerilerle gösterilip gösterilmeyeceğini ve bunların nasıl sıralanacaklarını denetler.",
        "Bir seçim olmadan geçerli satırı kopyalayıp kopyalamamayı denetler.",
        "Tamamlamaların belgedeki sözcüklere dayalı olarak hesaplanıp hesaplanmayacağını denetler.",
        "Öneri aracının yazı tipi boyutu",
        "Öneri aracının satır yüksekliği",
        "Düzenleyicinin seçime benzer eşleşmeleri vurgulayıp vurgulamayacağını denetler",
        "Düzenleyicinin semantik sembol tekrarlamalarını vurgulayıp vurgulamayacağını denetler",
        "Genel bakış cetvelinde aynı konumda gösterilebilecek süsleme sayısını denetler",
        "Genel bakış cetvelinin etrafına bir kenarlık çizilmesi gerekip gerekmediğini denetler.",
        "İmleç animasyon stilini denetler, olası değerler 'blink', 'smooth', 'phase', 'expand' ve 'solid'dir",
        "Ctrl tuşuna basarken fare tekerleği ile düzenleyici yazı tipini yakınlaştırın",
        "İmleç stilini denetler, kabul edilen değerler: 'block', 'block-outline', 'line', 'line-thin', 'underline' ve 'underline-thin'",
        "Yazı tipi ligatürlerini etkinleştirir",
        "İmlecin genel bakış cetvelinde gizlenip gizlenmeyeceğini denetler.",
        "Düzenleyicinin boşluk karakterlerini nasıl göstereceğini denetler, seçenekler: 'none', 'boundary', ve 'all'. 'boundary' seçeneği sözcükler arasındaki tek boşlukları göstermez.",
        "Düzenleyicinin kontrol karakterlerini gösterip göstermemesini denetler",
        "Düzenleyicinin girinti kılavuzlarını gösterip göstermemesini denetler",
        "Düzenleyicinin geçerli satır vurgusunu nasıl göstereceğini denetler, seçenekler: 'none', 'gutter', 'line', ve 'all'.",
        "Düzenleyicinin kod objektiflerini gösterip göstermediğini denetler",
        "Düzenleyicide kod katlamanın etkin olup olmadığını denetler",
        "Oluktaki kat kontrollerinin otomatik olarak gizlenip gizlenmeyeceğini denetler.",
        "Eşleşen ayraçları, onlardan biri seçildiğinde vurgula.",
        "Düzenleyicinin dikey glif boşluğunu oluşturup oluşturmayacağını kontrol eder. Glif boşluğu çoğunlukla hata ayıklamak için kullanılır.",
        "Boşluk ekleme ve silme sekme duraklarını izler",
        "Sondaki otomatik eklenen boşluğu kaldır",
        "Gözetleme düzenleyicilerini, içeriklerine çift tıklandığında veya Escape tuşuna basıldığında bile açık tut.",
        "Düzenleyicinin seçimleri sürükleyip bırakarak taşımaya izin verip vermeyeceğini denetler.",
        "Düzenleyici, bir Ekran Okuyucu'nun ne zaman bağlandığını algılamak için platform API'larını kullanacaktır.",
        "Düzenleyici bir Ekran Okuyucu ile kullanılmak üzere kalıcı olarak optimize edilecektir.",
        "Düzenleyici hiçbir zaman bir Ekran Okuyucu ile kullanılmak üzere optimize edilmeyecektir.",
        "Düzenleyicinin ekran okuyucular için optimize edilmiş bir modda çalışıp çalışmayacağını denetler.",
        "Düzenleyicinin bağlantıları otomatik algılayıp, onları tıklanabilir yapıp yapmayacağını denetler",
        "Karşılaştırma düzenleyicisinin farklılıkları yan yana mı yoksa satır içinde mi göstereceğini denetler",
        "Karşılaştırma düzenleyicisinin baştaki veya sondaki boşluklardaki değişmeleri farklılık olarak gösterip göstermemesini denetler",
        "Karşılaştırma düzenleyicisinin ekleme/çıkarma değişiklikleri için +/- göstergeleri gösterip göstermemesini denetler.",
        "Linux birincil panosunun desteklenip desteklenmeyeceğini denetler."
    ],
    "vs/editor/common/config/editorOptions": [
        "Düzenleyici şu an erişilebilir değil. Seçenekler için lütfen Alt+F1'e basın.",
        "Düzenleyici içeriği"
    ],
    "vs/editor/common/controller/cursor": ["Komut yürütülürken beklenmeyen özel durum oluştu."],
    "vs/editor/common/model/textModelWithTokens": ["Mod, girdiyi belirteçlere ayırırken başarısız oldu."],
    "vs/editor/common/modes/modesRegistry": ["Düz Metin"],
    "vs/editor/common/services/bulkEdit": [
        "Bu dosyalar bu arada değiştirildi: {0}",
        "Düzenleme yapılmadı",
        "{1} dosyada {0} metin düzenlemesi yapıldı",
        "Bir dosyada {0} metin düzenlemesi yapıldı"
    ],
    "vs/editor/common/services/modelServiceImpl": ["[{0}]\n{1}", "[{0}] {1}"],
    "vs/editor/common/view/editorColorRegistry": [
        "İmlecin bulunduğu satırın vurgusunun arka plan rengi.",
        "İmlecin bulunduğu satırın kenarlığının arka plan rengi.",
        "Hızlı açma ve bulma özellikleri gibi vurgulanan alanların arka plan rengi.",
        "Düzenleyici imlecinin rengi.",
        "Düzenleyici imlecinin arka plan rengi. Bir blok imlecinin kapladığı bir karakterin rengini özelleştirmeyi sağlar.",
        "Düzenleyicideki boşluk karakterlerinin rengi.",
        "Düzenleyici girinti kılavuzlarının rengi.",
        "Düzenleyici satır numaralarının rengi.",
        "Düzenleyici cetvellerinin rengi.",
        "Düzenleyici kod objektiflerinin ön plan rengi",
        "Eşleşen parantezlerin arka plan rengi",
        "Eşleşen parantez kutularının rengi",
        "Genel bakış cetvelinin kenarlık rengi.",
        "Düzenleyici oluğunun arka plan rengi. Oluk, glif boşluklarını ve satır numaralarını içerir.",
        "Düzenleyicideki hata karalamalarının ön plan rengi.",
        "Düzenleyicideki hata karalamalarının kenarlık rengi.",
        "Düzenleyicideki uyarı karalamalarının ön plan rengi.",
        "Düzenleyicideki uyarı karalamalarının kenarlık rengi."
    ],
    "vs/editor/contrib/bracketMatching/common/bracketMatching": ["Ayraca Git"],
    "vs/editor/contrib/caretOperations/common/caretOperations": ["İmleci Sola Taşı", "İmleci Sağa Taşı"],
    "vs/editor/contrib/caretOperations/common/transpose": ["Harfleri Birbirleriyle Değiştir"],
    "vs/editor/contrib/clipboard/browser/clipboard": ["Kes", "Kopyala", "Yapıştır", "Sentaks Vurgulaması İle Kopyala"],
    "vs/editor/contrib/comment/common/comment": [
        "Satır Yorumunu Aç/Kapat",
        "Satır Açıklaması Ekle",
        "Satır Açıklamasını Kaldır",
        "Yorum Bloğunu Aç/Kapat"
    ],
    "vs/editor/contrib/contextmenu/browser/contextmenu": ["Düzenleyici Bağlam Menüsünü Göster"],
    "vs/editor/contrib/find/browser/findWidget": [
        "Bul",
        "Bul",
        "Önceki eşleşme",
        "Sonraki eşleşme",
        "Seçimde bul",
        "Kapat",
        "Değiştir",
        "Değiştir",
        "Değiştir",
        "Tümünü Değiştir",
        "Değiştirme modunu değiştir",
        "Yalnızca ilk 999 sonuç vurgulandı, ancak tüm bulma işlemleri metnin tamamı üzerinde çalışıyor.",
        "{0}/{1}",
        "Sonuç Yok"
    ],
    "vs/editor/contrib/find/common/findController": [
        "Bul",
        "Sonrakini Bul",
        "Öncekini Bul",
        "Sonraki Seçimi Bul",
        "Önceki Seçimi Bul",
        "Değiştir",
        "Seçimi Sonraki Bulunan Eşleşmeye Ekle",
        "Seçimi Önceki Bulunan Eşleşmeye Ekle",
        "Son Seçimi Sonraki Bulunan Eşleşmeye Taşı",
        "Son Seçimi Önceki Bulunan Eşleşmeye Taşı",
        "Bulunan Eşleşmenin Tüm Tekrarlamalarını Seç",
        "Tüm Tekrarlamaları Değiştir",
        "Sonraki Arama Terimini Göster",
        "Önceki Arama Terimini Göster"
    ],
    "vs/editor/contrib/folding/browser/folding": [
        "Katlamayı Aç",
        "Katlamaları Özyinelemeli Olarak Aç",
        "Katla",
        "Özyinelemeli Olarak Katla",
        "Hepsini Katla",
        "Tüm Katlamaları Aç",
        "{0}. Düzeyi Katla"
    ],
    "vs/editor/contrib/format/browser/formatActions": [
        "{0}. satırda 1 biçimlendirme düzenlemesi yapıldı",
        "{1}. satırda {0} biçimlendirme düzenlemesi yapıldı",
        "{0} ve {1} satırları arasında 1 biçimlendirme düzenlemesi yapıldı",
        "{1} ve {2} satırları arasında {0} biçimlendirme düzenlemesi yapıldı",
        "Belgeyi Biçimlendir",
        "Seçimi Biçimlendir"
    ],
    "vs/editor/contrib/goToDeclaration/browser/goToDeclarationCommands": [
        "'{0}' için tanım bulunamadı",
        "Tanım bulunamadı",
        " – {0} tanım",
        "Tanıma Git",
        "Tanımı Yana Aç",
        "Tanıma Göz At",
        "'{0}' için uygulama bulunamadı",
        "Uygulama bulunamadı",
        " – {0} uygulama",
        "Uygulamaya Git",
        "Uygulamaya Göz At",
        "'{0}' için tür tanımı bulunamadı",
        "Tür tanımı bulunamadı",
        " – {0} tür tanımı",
        "Tür Tanımına Git",
        "Tür Tanımına Göz At"
    ],
    "vs/editor/contrib/goToDeclaration/browser/goToDeclarationMouse": ["{0} tanımı göstermek için tıklayın."],
    "vs/editor/contrib/gotoError/browser/gotoError": [
        "({0}/{1})",
        "Sonraki Hata veya Uyarıya Git",
        "Önceki Hata veya Uyarıya Git",
        "Düzenleyicinin işaretçi gezinti aracının hata rengi.",
        "Düzenleyicinin işaretçi gezinti aracının uyarı rengi.",
        "Düzenleyicinin işaretçi gezinti aracının arka planı."
    ],
    "vs/editor/contrib/hover/browser/hover": ["Bağlantı Vurgusunu Göster"],
    "vs/editor/contrib/hover/browser/modesContentHover": ["Yükleniyor..."],
    "vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": ["Önceki Değerle Değiştir", "Sonraki Değerle Değiştir"],
    "vs/editor/contrib/linesOperations/common/linesOperations": [
        "Satırı Yukarı Kopyala",
        "Satırı Aşağı Kopyala",
        "Satırı Yukarı Taşı",
        "Satırı Aşağı Taşı",
        "Satırları Artan Şekilde Sırala",
        "Satırları Azalan Şekilde Sırala",
        "Sondaki Boşluğu Kırp",
        "Satırı Sil",
        "Satırı Girintile",
        "Satırın Girintisini Azalt",
        "Üste Satır Ekle",
        "Alta Satır Ekle",
        "Soldaki Her Şeyi Sil",
        "Sağdaki Her Şeyi Sil",
        "Satırları Birleştir",
        "İmlecin etrafındaki karakterleri birbirleriyle değiştir",
        "Büyük Harfe Dönüştür",
        "Küçük Harfe Dönüştür"
    ],
    "vs/editor/contrib/links/browser/links": [
        "Bağlantıyı izlemek için Cmd tuşuna basarak tıklayın",
        "Bağlantıyı izlemek için Ctrl tuşuna basarak tıklayın",
        "Komutu yürütmek için Cmd + tıklama yapın",
        "Komutu yürütmek için Ctrl + tıklama yapın",
        "Bağlantıyı izlemek için Alt tuşuna basarak tıklayın",
        "Komutu yürütmek için Alt + tıklama yapın",
        "Üzgünüz, bu bağlantı iyi oluşturulmamış olduğu için açılamadı: {0}",
        "Üzgünüz; bu bağlantı, hedefi eksik olduğu için açılamadı.",
        "Bağlantıyı Aç"
    ],
    "vs/editor/contrib/multicursor/common/multicursor": [
        "Yukarıya İmleç Ekle",
        "Aşağıya İmleç Ekle",
        "Satır Sonlarına İmleç Ekle"
    ],
    "vs/editor/contrib/parameterHints/browser/parameterHints": ["Parametre İpuçlarını Tetikle"],
    "vs/editor/contrib/parameterHints/browser/parameterHintsWidget": ["{0}, ipucu"],
    "vs/editor/contrib/quickFix/browser/quickFixCommands": [
        "Düzeltmeleri Göster ({0})",
        "Düzeltmeleri Göster",
        "Hızlı Düzeltme"
    ],
    "vs/editor/contrib/referenceSearch/browser/referenceSearch": ["– {0} başvuru", "Tüm Başvuruları Bul"],
    "vs/editor/contrib/referenceSearch/browser/referencesController": ["Yükleniyor..."],
    "vs/editor/contrib/referenceSearch/browser/referencesModel": [
        "{0} yolunda, {1}. satır {2}. sütundaki sembol",
        "{0} içinde 1 sembol, tam yol {1}",
        "{1} içinde {0} sembol, tam yol {2}",
        "Sonuç bulunamadı",
        "{0} yolunda 1 sembol bulundu",
        "{1} yolunda {0} sembol bulundu",
        "{1} dosyada {0} sembol bulundu"
    ],
    "vs/editor/contrib/referenceSearch/browser/referencesWidget": [
        "Dosya çözümlenemedi.",
        "{0} başvuru",
        "{0} başvuru",
        "önizleme yok",
        "Başvurular",
        "Sonuç yok",
        "Başvurular",
        "Gözetleme görünümü başlık alanının arka plan rengi.",
        "Gözetleme görünümü başlığının rengi.",
        "Gözetleme görünümü başlık bilgisinin rengi.",
        "Gözetleme görünümü kenarlıkları ve ok işaretinin rengi.",
        "Gözetleme görünümü sonuç listesinin arka plan rengi.",
        "Gözetleme görünümü sonuç listesindeki satır düğümlerinin ön plan rengi.",
        "Gözetleme görünümü sonuç listesindeki dosya düğümlerinin ön plan rengi.",
        "Gözetleme görünümü sonuç listesindeki seçilen girdinin arka plan rengi.",
        "Gözetleme görünümü sonuç listesindeki seçilen girdinin ön plan rengi.",
        "Gözetleme görünümü düzenleyicisinin arka plan rengi.",
        "Gözetleme görünümü düzenleyicisindeki oluğun arka plan rengi.",
        "Gözetleme görünümü sonuç listesindeki eşleşme vurgusu rengi.",
        "Gözetleme görünümü düzenleyicisindeki eşleşme vurgusu rengi."
    ],
    "vs/editor/contrib/rename/browser/rename": [
        "Sonuç yok.",
        "'{0}', '{1}' olarak başarıyla yeniden adlandırıldı. Özet: {2}",
        "Üzgünüz, yeniden adlandırma işlemi başarısız oldu.",
        "Sembolü Yeniden Adlandır"
    ],
    "vs/editor/contrib/rename/browser/renameInputField": [
        "Girdiyi yeniden adlandır. Yeni adı girin ve işlemek için Enter'a basın."
    ],
    "vs/editor/contrib/smartSelect/common/smartSelect": ["Seçimi Genişlet", "Seçimi Daralt"],
    "vs/editor/contrib/suggest/browser/suggestController": [
        "'{0}' kabul edildiği için şu metin eklendi: {1}",
        "Öneriyi Tetikle"
    ],
    "vs/editor/contrib/suggest/browser/suggestWidget": [
        "Öneri aracının arka plan rengi.",
        "Öneri aracının kenarlık rengi.",
        "Öneri aracının ön plan rengi.",
        "Öneri aracındaki seçilen girdinin arka plan rengi.",
        "Öneri aracındaki eşleşme vurgularının rengi.",
        "Devamını Oku...{0}",
        "{0}, öneri, detaylı",
        "{0}, öneri",
        "Daha azını oku...{0}",
        "Yükleniyor...",
        "Öneri yok.",
        "{0}, kabul edildi",
        "{0}, öneri, detaylı",
        "{0}, öneri"
    ],
    "vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": ["Tab Tuşu İle Odak Değiştirmeyi Aç/Kapat"],
    "vs/editor/contrib/wordHighlighter/common/wordHighlighter": [
        "Bir değişkeni okumak gibi, okuma-erişimi sırasındaki bir sembolün arka plan rengi.",
        "Bir değişkene yazmak gibi, yazma-erişimi sırasındaki bir sembolün arka plan rengi."
    ],
    "vs/editor/contrib/zoneWidget/browser/peekViewWidget": ["Kapat"],
    "vs/editor/standalone/browser/inspectTokens/inspectTokens": ["Developer: Inspect Tokens"],
    "vs/editor/standalone/browser/quickOpen/gotoLine": [
        "Go to line {0} and character {1}",
        "Go to line {0}",
        "Type a line number between 1 and {0} to navigate to",
        "Type a character between 1 and {0} to navigate to",
        "Go to line {0}",
        "Type a line number, followed by an optional colon and a character number to navigate to",
        "Go to Line..."
    ],
    "vs/editor/standalone/browser/quickOpen/quickCommand": [
        "{0}, commands",
        "Type the name of an action you want to execute",
        "Command Palette"
    ],
    "vs/editor/standalone/browser/quickOpen/quickOutline": [
        "{0}, symbols",
        "Type the name of an identifier you wish to navigate to",
        "Go to Symbol...",
        "symbols ({0})",
        "modules ({0})",
        "classes ({0})",
        "interfaces ({0})",
        "methods ({0})",
        "functions ({0})",
        "properties ({0})",
        "variables ({0})",
        "variables ({0})",
        "constructors ({0})",
        "calls ({0})"
    ],
    "vs/editor/standalone/browser/standaloneCodeEditor": [
        "Editor content",
        "Press Ctrl+F1 for Accessibility Options.",
        "Press Alt+F1 for Accessibility Options."
    ],
    "vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast": ["Toggle High Contrast Theme"],
    "vs/platform/configuration/common/configurationRegistry": [
        "Varsayılan Yapılandırma Geçersiz Kılmaları",
        "{0} dili için geçersiz kılınacak düzenleyici ayarlarını yapılandırın.",
        "Bir dil için geçersiz kılınacak düzenleyici ayarlarını yapılandırın.",
        "'{0}' kaydedilemiyor. Bu, dile özgü düzenleyici ayarlarını tanımlamak için '\\\\[.*\\\\]$' özellik kalıbı ile eşleşir. 'configurationDefaults' ögesini kullanın.",
        "'{0}' kaydedilemiyor. Bu özellik zaten kayıtlı."
    ],
    "vs/platform/keybinding/common/abstractKeybindingService": [
        "({0}) öğesine basıldı. Akorun ikinci tuşu bekleniyor...",
        "({0}, {1}) tuş bileşimi bir komut değil."
    ],
    "vs/platform/message/common/message": ["Kapat", "Daha Sonra", "İptal"],
    "vs/platform/theme/common/colorRegistry": [
        "Geçersiz renk biçimi. #RGB, #RGBA, #RRGGBB veya #RRGGBBAA kullanın",
        "Çalışma ekranında kullanılan renkler.",
        "Genel ön plan rengi. Bu renk, bir bileşen tarafından geçersiz kılınmadıkça kullanılır.",
        "Hata mesajları için genel ön plan rengi. Bu renk, bir bileşen tarafından geçersiz kılınmadıkça kullanılır.",
        "Ek bilgi sağlayan açıklama metni(örneğin bir etiket) için ön plan rengi.",
        "Odaklanılan ögeler için genel kenarlık rengi. Bu renk, bir bileşen tarafından geçersiz kılınmadıkça kullanılır.",
        "Daha yüksek karşıtlık için, ögelerin etrafında onları diğerlerinden ayıracak ekstra bir kenarlık.",
        "Daha yüksek karşıtlık için, aktif ögelerin etrafında onları diğerlerinden ayıracak ekstra bir kenarlık.",
        "Çalışma ekranındaki metin seçimlerinin arka plan rengi(örneğin girdi alanları veya metin alanları). Bunun, düzenleyicideki seçimlere uygulanmayacağını unutmayın.",
        "Metin ayırıcıların rengi.",
        "Metindeki bağlantıların ön plan rengi.",
        "Metindeki aktif bağlantıların ön plan rengi.",
        "Önceden biçimlendirilmiş metin parçalarının ön plan rengi.",
        "Metindeki alıntı bloklarının arka plan rengi.",
        "Metindeki alıntı bloklarının kenarlık rengi.",
        "Metindeki kod bloklarının arka plan rengi.",
        "Bul/değiştir gibi düzenleyici içindeki araçların gölge rengi.",
        "Giriş kutusu arka planı.",
        "Giriş kutusu ön planı.",
        "Giriş kutusu kenarlığı.",
        "Girdi alanlarındaki aktif seçeneklerin kenarlık rengi.",
        "Yer tutucu metin için girdi kutusu ön plan rengi.",
        "Bilgi önem derecesi için girdi doğrulama arka plan rengi.",
        "Bilgi önem derecesi için girdi doğrulama kenarlık rengi.",
        "Bilgi uyarısı için girdi doğrulama arka plan rengi.",
        "Uyarı önem derecesi için girdi doğrulama kenarlık rengi.",
        "Hata önem derecesi için girdi doğrulama arka plan rengi.",
        "Hata önem derecesi için girdi doğrulama kenarlık rengi.",
        "Açılır kutu arka planı.",
        "Açılır kutu ön planı.",
        "Açılır kutu kenarlığı.",
        "Liste/Ağaç aktifken odaklanılan ögenin Lise/Ağaç arka plan rengi. Bir aktif liste/ağaç, klavye odağındadır; pasif olan odakta değildir.",
        "Liste/Ağaç aktifken odaklanılan ögenin Lise/Ağaç ön plan rengi. Bir aktif liste/ağaç, klavye odağındadır; pasif olan odakta değildir.",
        "Liste/Ağaç aktifken seçilen ögenin Lise/Ağaç arka plan rengi. Bir aktif liste/ağaç, klavye odağındadır; pasif olan odakta değildir.",
        "Liste/Ağaç aktifken seçilen ögenin Lise/Ağaç ön plan rengi. Bir aktif liste/ağaç, klavye odağındadır; pasif olan odakta değildir.",
        "Liste/Ağaç pasifken seçilen ögenin Lise/Ağaç arka plan rengi. Bir aktif liste/ağaç, klavye odağındadır; pasif olan odakta değildir.",
        "Liste/Ağaç pasifken seçilen ögenin Lise/Ağaç ön plan rengi. Bir aktif liste/ağaç, klavye odağındadır; pasif olan odakta değildir.",
        "Liste/Ağaç pasifken seçilen ögenin Lise/Ağaç arka plan rengi. Bir aktif liste/ağaç, klavye odağındadır; pasif olan odakta değildir.",
        "Liste/Ağaç pasifken seçilen ögenin Lise/Ağaç ön plan rengi. Bir aktif liste/ağaç, klavye odağındadır; pasif olan odakta değildir.",
        "Fare ile ögelerin üzerine gelindiğinde Liste/Ağaç arka planı.",
        "Fare ile ögelerin üzerine gelindiğinde Liste/Ağaç ön planı.",
        "Fare ile ögeler taşınırken Liste/Ağaç sürükle ve bırak arka planı.",
        "Liste/Ağaç içinde arama yaparken eşleşme vurgularının Liste/Ağaç ön plan rengi.",
        "Gruplama etiketleri için hızlı seçici rengi.",
        "Gruplama kenarlıkları için hızlı seçici rengi.",
        "Buton ön plan rengi.",
        "Buton arka plan rengi.",
        "Fareyle üzerine gelindiğinde buton arka plan rengi.",
        "Gösterge arka plan rengi. Göstergeler küçük bilgi etiketleridir, ör. arama sonucu sayısı için.",
        "Gösterge ön plan rengi. Göstergeler küçük bilgi etiketleridir, ör. arama sonucu sayısı için.",
        "Görünümün kaydırıldığını belirtmek için kaydırma çubuğu gölgesi.",
        "Kaydırma çubuğu kaydıracının arka plan rengi.",
        "Fareyle üzerine gelindiğinde kaydırma çubuğu kaydıracının arka plan rengi.",
        "Kaydırma çubuğu kaydıracının aktif iken arka plan rengi.",
        "Uzun süren işlemleri gösterebilen ilerleme çubuğunun arka plan rengi.",
        "Düzenleyici arka plan rengi.",
        "Düzenleyici varsayılan ön plan rengi.",
        "Bul/değiştir gibi düzenleyici araçlarının arka plan rengi.",
        "Editör araçlarının kenarlık rengi. Renk, araç bir kenarlığı olmasına karar verdiğinde ve renk hiçbir eklenti tarafından geçersiz kılınmadığında kullanılır.",
        "Düzenleyici seçiminin rengi.",
        "Yüksek karşıtlık için seçilen metnin rengi.",
        "Bir pasif düzenleyicideki seçimin rengi.",
        "Seçimle aynı içeriğe sahip bölgelerin rengi.",
        "Geçerli arama eşleşmesinin rengi.",
        "Diğer arama eşleşmelerinin rengi.",
        "Aramayı sınırlayan aralığı renklendirin.",
        "Bağlantı vurgusu gösterilen bir sözcüğün altını vurgulayın.",
        "Düzenleyici bağlantı vurgusunun arka plan rengi.",
        "Düzenleyici bağlantı vurgusunun kenarlık rengi.",
        "Aktif bağlantıların rengi.",
        "Eklenen metnin arka plan rengi.",
        "Çıkarılan metnin arka plan rengi.",
        "Eklenen metnin ana hat rengi.",
        "Çıkarılan metnin ana hat rengi.",
        "Satır içi birleştirme çakışmalarında geçerli üstbilgi arka planı.",
        "Satır içi birleştirme çakışmalarında geçerli içerik arka planı.",
        "Satır içi birleştirme çakışmalarında gelen üstbilgi arka planı.",
        "Satır içi birleştirme çakışmalarında gelen içerik arka planı.",
        "Satır içi birleştirme çakışmalarında ortak ata üstbilgisi arka planı.",
        "Satır içi birleştirme çakışmalarında ortak ata içeriği arka planı.",
        "Satır içi birleştirme çakışmalarında üst bilgi ve ayırıcıdaki kenarlık rengi.",
        "Satır içi birleştirme çakışmalarında geçerli genel bakış cetveli ön planı.",
        "Satır içi birleştirme çakışmalarında gelen genel bakış cetveli ön planı.",
        "Satır içi birleştirme çakışmalarında ortak ata genel bakış cetveli ön planı."
    ]
});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.tr.js.map
