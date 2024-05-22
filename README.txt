Main App React projesi olup tabloda listelenmiş veri gösterilmesini sağlar. Veri mock olarak lokal proje içersinde oluşturulmuştur.

Projeyi lokalimizde ayağa kaldırmamız için sırasıyla şu komutları ana dizinde çalıştırabilirsiniz:

    -npm i
    -npm start

Uygulama lokal makinenizde 3001 Portunda çalışıyor olacaktır.

Micro frontend mimarisini uygulamak için "Webpack Module Federation" kullanılmıştır. webpack.config.js dosyası içersinde Plugins kısmında gerekli configler verilmiştir. 
Dolayısıyla proje içersinde micro-app'imizi webpack.config.js de verdiğimiz dizin isminden import edebiliriz.

Bu uygulama içersinde UI frameworku olarak "Material UI" kullanılmıştır. Kısım kısım css dosyaları içersinde classlar override edilerek custom edilmiştir.

Tablo komponenti "./src/components/Table" dizinindedir. Fonksiyonel komponent yapısı kullanılmıştır.
Redux-toolkit ile tablo verisi, filtre, order, hide-show column özelliği ve pagination için gerekli verilerin alınması ve update edilmesi sağlanmıştır.
- Filtreleme için kolon isminin üzerinde tıklanması ve ters yönde filtreleme için tekrar tıklanması yeterlidir.
- İstenilen kolonun gizlenmesi için kolon ismi yanındaki hide ikonuna tıklanması yeterlidir. Tekrar görünür hale getirmek için pagination yanındaki RESET butonuna tıklanması gerekmektedir.
- Pagination clint side yapılmaktadır. Sadece gösterilen sayfanın verisi fetch edilip gösterilmek yerine bütün veri çekilip sadece gösterilen sayfanın verisi ön yüzde gösterilmektedir. 
  (Örnek proje ve lokaldeki küçük boyutta mock data kullanıldığı için bu şekilde yapılmıştır.)
- Refresh butonuna tıklandığında tablo konfigürasyonları korunur veri tekrar çekilir.
  (Verinin tekrar çekilmesi demek API'den çekilmeyeceği için mock datanın ilk hali tekrar Redux store'a set edilir filtreler vs. en baştan uygulanır. 
   Yani asenkron bir işlem yoktur fakat sanki öyleymiş gibi loading ikonu konulmuştur.)

Proje henüz responsive hale getirilmemiştir mobile cihazlarda UI'da görsel hatalar olabilir.
Tablo komponenti içersinde tablonun başlıkları, filtreleme kısmı ve pagination kısmı için ayrı fonksiyonel komponentler kullanılmıştır. Bu komponentler sadece table komponentine özel olduğu için aynı dosya içersinde oluşturulmuştur.


Uygulamayı canlı ortama taşımak ve deployment yapmak için "npm run build" komutuyla bundle hali "./dist" klasörü içersinde statik dosyalar olarak oluşmaktadır manuel olarak host makinesindeki
ilgili dizine taşınabilir. Veya docker-compose-up ile containerda çalışacak hale gelen docker-image ayağa kaldırılabilir. Ve pushlanarak ilgili host makinesine atılabilir.