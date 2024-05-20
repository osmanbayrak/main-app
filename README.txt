Main App React projesi olup tabloda listelenmiş veri gösterilmesini sağlar. Veri mock olarak lokal proje içersinde oluşturulmuştur.

Projeyi lokalimizde ayağa kaldırmamız için sırasıyla şu komutları ana dizinde çalıştırabilirsiniz:

    -npm i
    -npm start

Uygulama lokal makinenizde 3001 Portunda çalışıyor olacaktır.

Micro frontend mimarisini uygulamak için "Webpack Module Federation" kullanılmıştır. webpack.config.js dosyası içersinde Plugins kısmında gerekli configler verilmiştir. 
Dolayısıyla proje içersinde micro-app'imizi webpack.config.js de verdiğimiz dizin isminden import edebiliriz.

Bu uygulama içersinde UI frameworku olarak "Material UI" kullanılmıştır. Kısım kısım css dosyaları içersinde classlar override edilerek custom edilmiştir.

Tablo komponenti "./src/components/Table" dizinindedir. Fonksiyonel komponent yapısı kullanılmıştır.
Redux-toolkit ile tablo verisi, filtre, order ve pagination için gerekli verilerin alınması ve update edilmesi sağlanmıştır.
Tablo komponenti içersinde tablonun başlıkları, filtreleme kısmı ve pagination kısmı için ayrı fonksiyonel komponentler kullanılmıştır. Bu komponentler sadece table komponentine özel olduğu için aynı dosya içersinde oluşturulmuştur.


Uygulamayı canlı ortama taşımak ve deployment yapmak için "npm run build" komutuyla bundle hali "./dist" klasörü içersinde statik dosyalar olarak oluşmaktadır manuel olarak host makinesindeki
ilgili dizine taşınabilir. Veya docker-compose-up ile containerda çalışacak hale gelen docker-image ayağa kaldırılabilir. Ve pushlanarak ilgili host makinesine atılabilir.