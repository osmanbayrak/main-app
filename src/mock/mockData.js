const baseData = [
  {
    id: 1,
    firstName: "Ali",
    lastName: "Yılmaz",
    age: 34,
    gender: "Erkek",
    admissionDate: "2023-05-01",
    diagnosis: "Hipertansiyon",
    nationalityNumber: "12345678901",
    discharged: false,
    attendingDoctor: "Dr. Ahmet Kaya",
    bloodType: "A+",
    phoneNumber: "5551234567",
    address: "Gazi Mustafa Kemal Blv. No: 123, Çankaya, Ankara"
  },
  {
    id: 2,
    firstName: "Ayşe",
    lastName: "Kara",
    age: 28,
    gender: "Kadın",
    admissionDate: "2023-05-02",
    diagnosis: "Diyabet",
    nationalityNumber: "23456789012",
    discharged: true,
    attendingDoctor: "Dr. Ayşe Demir",
    bloodType: "B+",
    phoneNumber: "5552345678",
    address: "Atatürk Cad. No: 45, Alsancak, İzmir"
  },
  {
    id: 3,
    firstName: "Mehmet",
    lastName: "Öztürk",
    age: 45,
    gender: "Erkek",
    admissionDate: "2023-05-03",
    diagnosis: "Koroner Arter Hastalığı",
    nationalityNumber: "34567890123",
    discharged: false,
    attendingDoctor: "Dr. Mehmet Çelik",
    bloodType: "AB+",
    phoneNumber: "5553456789",
    address: "Cumhuriyet Cad. No: 67, Kızılay, Ankara"
  },
  {
    id: 4,
    firstName: "Fatma",
    lastName: "Çelik",
    age: 52,
    gender: "Kadın",
    admissionDate: "2023-05-04",
    diagnosis: "Astım",
    nationalityNumber: "45678901234",
    discharged: true,
    attendingDoctor: "Dr. Elif Yılmaz",
    bloodType: "O+",
    phoneNumber: "5554567890",
    address: "Şehitler Cad. No: 89, Konak, İzmir"
  },
  {
    id: 5,
    firstName: "Ahmet",
    lastName: "Demir",
    age: 38,
    gender: "Erkek",
    admissionDate: "2023-05-05",
    diagnosis: "Gastrit",
    nationalityNumber: "56789012345",
    discharged: false,
    attendingDoctor: "Dr. Ali Yıldız",
    bloodType: "A-",
    phoneNumber: "5555678901",
    address: "Adnan Menderes Bulv. No: 12, Bahçelievler, Ankara"
  },
  {
    id: 6,
    firstName: "Emine",
    lastName: "Koç",
    age: 29,
    gender: "Kadın",
    admissionDate: "2023-05-06",
    diagnosis: "Migren",
    nationalityNumber: "67890123456",
    discharged: true,
    attendingDoctor: "Dr. Ayşe Kara",
    bloodType: "B-",
    phoneNumber: "5556789012",
    address: "Atatürk Cad. No: 34, Alsancak, İzmir"
  },
  {
    id: 7,
    firstName: "Hasan",
    lastName: "Şahin",
    age: 41,
    gender: "Erkek",
    admissionDate: "2023-05-07",
    diagnosis: "Depresyon",
    nationalityNumber: "78901234567",
    discharged: false,
    attendingDoctor: "Dr. Mehmet Öz",
    bloodType: "AB-",
    phoneNumber: "5557890123",
    address: "Atatürk Bulv. No: 56, Çankaya, Ankara"
  },
  {
    id: 8,
    firstName: "Elif",
    lastName: "Bulut",
    age: 33,
    gender: "Kadın",
    admissionDate: "2023-05-08",
    diagnosis: "Hipotiroidi",
    nationalityNumber: "89012345678",
    discharged: true,
    attendingDoctor: "Dr. Fatma Çelik",
    bloodType: "O-",
    phoneNumber: "5558901234",
    address: "Cumhuriyet Cad. No: 78, Kızılay, Ankara"
  },
  {
    id: 9,
    firstName: "Mustafa",
    lastName: "Kaya",
    age: 47,
    gender: "Erkek",
    admissionDate: "2023-05-09",
    diagnosis: "Obezite",
    nationalityNumber: "90123456789",
    discharged: false,
    attendingDoctor: "Dr. Ahmet Kaya",
    bloodType: "A+",
    phoneNumber: "5559012345",
    address: "İnönü Cad. No: 90, Alsancak, İzmir"
  },
  {
    id: 10,
    firstName: "Zeynep",
    lastName: "Aydın",
    age: 25,
    gender: "Kadın",
    admissionDate: "2023-05-10",
    diagnosis: "Anemi",
    nationalityNumber: "01234567890",
    discharged: true,
    attendingDoctor: "Dr. Elif Yıldırım",
    bloodType: "B+",
    phoneNumber: "5550123456",
    address: "Tunç Sok. No: 67, Bahçelievler, Ankara"
  },
  {
    id: 11,
    firstName: "Murat",
    lastName: "Polat",
    age: 39,
    gender: "Erkek",
    admissionDate: "2023-05-11",
    diagnosis: "KOAH",
    nationalityNumber: "11234567890",
    discharged: false,
    attendingDoctor: "Dr. Ali Demir",
    bloodType: "AB+",
    phoneNumber: "5551123456",
    address: "Atatürk Bulv. No: 23, Çankaya, Ankara"
  },
  {
    id: 12,
    firstName: "Rabia",
    lastName: "Yıldırım",
    age: 31,
    gender: "Kadın",
    admissionDate: "2023-05-12",
    diagnosis: "Alerji",
    nationalityNumber: "12234567890",
    discharged: true,
    attendingDoctor: "Dr. Ayşe Koç",
    bloodType: "O+",
    phoneNumber: "5552123456",
    address: "Cumhuriyet Cad. No: 45, Kızılay, Ankara"
  },
  {
    id: 13,
    firstName: "Kemal",
    lastName: "Özdemir",
    age: 44,
    gender: "Erkek",
    admissionDate: "2023-05-13",
    diagnosis: "Artrit",
    nationalityNumber: "13234567890",
    discharged: false,
    attendingDoctor: "Dr. Mehmet Çelik",
    bloodType: "A-",
    phoneNumber: "5553234567",
    address: "Atatürk Cad. No: 78, Alsancak, İzmir"
  },
  {
    id: 14,
    firstName: "Derya",
    lastName: "Erdem",
    age: 37,
    gender: "Kadın",
    admissionDate: "2023-05-14",
    diagnosis: "Glokom",
    nationalityNumber: "14234567890",
    discharged: true,
    attendingDoctor: "Dr. Fatma Yılmaz",
    bloodType: "B-",
    phoneNumber: "5554345678",
    address: "İstiklal Cad. No: 56, Konak, İzmir"
  },
  {
    id: 15,
    firstName: "Hakan",
    lastName: "Çetinkaya",
    age: 42,
    gender: "Erkek",
    admissionDate: "2023-05-15",
    diagnosis: "Ülser",
    nationalityNumber: "15234567890",
    discharged: false,
    attendingDoctor: "Dr. Ali Kaya",
    bloodType: "AB-",
    phoneNumber: "5555456789",
    address: "Bahçelievler Cad. No: 23, Bahçelievler, Ankara"
  },
  {
    id: 16,
    firstName: "Seda",
    lastName: "Kurt",
    age: 26,
    gender: "Kadın",
    admissionDate: "2023-05-16",
    diagnosis: "Fibromiyalji",
    nationalityNumber: "16234567890",
    discharged: true,
    attendingDoctor: "Dr. Ayşe Demir",
    bloodType: "O-",
    phoneNumber: "5556567890",
    address: "Fatih Cad. No: 34, Konak, İzmir"
  },
  {
    id: 17,
    firstName: "Burak",
    lastName: "Doğan",
    age: 48,
    gender: "Erkek",
    admissionDate: "2023-05-17",
    diagnosis: "Panik Atak",
    nationalityNumber: "17234567890",
    discharged: false,
    attendingDoctor: "Dr. Mehmet Kaya",
    bloodType: "A+",
    phoneNumber: "5557678901",
    address: "Mithatpaşa Cad. No: 12, Çankaya, Ankara"
  },
  {
    id: 18,
    firstName: "Gül",
    lastName: "Güneş",
    age: 35,
    gender: "Kadın",
    admissionDate: "2023-05-18",
    diagnosis: "Kansızlık",
    nationalityNumber: "18234567890",
    discharged: true,
    attendingDoctor: "Dr. Fatma Çelik",
    bloodType: "B+",
    phoneNumber: "5558789012",
    address: "Gazi Bulv. No: 45, Bahçelievler, Ankara"
  },
  {
    id: 19,
    firstName: "Okan",
    lastName: "Demirtaş",
    age: 50,
    gender: "Erkek",
    admissionDate: "2023-05-19",
    diagnosis: "Alzheimer",
    nationalityNumber: "19234567890",
    discharged: false,
    attendingDoctor: "Dr. Ahmet Yıldız",
    bloodType: "AB+",
    phoneNumber: "5559890123",
    address: "Fatih Cad. No: 78, Alsancak, İzmir"
  },
  {
    id: 20,
    firstName: "Büşra",
    lastName: "Aksoy",
    age: 30,
    gender: "Kadın",
    admissionDate: "2023-05-20",
    diagnosis: "Sinüzit",
    nationalityNumber: "20234567890",
    discharged: true,
    attendingDoctor: "Dr. Ayşe Kaya",
    bloodType: "O+",
    phoneNumber: "5550901234",
    address: "Kocatepe Cad. No: 56, Kızılay, Ankara"
  },
  {
    id: 21,
    firstName: "Mert",
    lastName: "Tunç",
    age: 36,
    gender: "Erkek",
    admissionDate: "2023-05-21",
    diagnosis: "Spondiloz",
    nationalityNumber: "21234567890",
    discharged: false,
    attendingDoctor: "Dr. Mehmet Yılmaz",
    bloodType: "A-",
    phoneNumber: "5552012345",
    address: "İsmetpaşa Cad. No: 67, Alsancak, İzmir"
  },
  {
    id: 22,
    firstName: "Selma",
    lastName: "Kaya",
    age: 43,
    gender: "Kadın",
    admissionDate: "2023-05-22",
    diagnosis: "Katarakt",
    nationalityNumber: "22234567890",
    discharged: true,
    attendingDoctor: "Dr. Fatma Yılmaz",
    bloodType: "B-",
    phoneNumber: "5553123456",
    address: "Adnan Menderes Bulv. No: 78, Konak, İzmir"
  },
  {
    id: 23,
    firstName: "Engin",
    lastName: "Koşar",
    age: 36,
    gender: "Erkek",
    admissionDate: "2023-05-23",
    diagnosis: "Menisküs",
    nationalityNumber: "23234567890",
    discharged: false,
    attendingDoctor: "Dr. Ali Kara",
    bloodType: "AB-",
    phoneNumber: "5554234567",
    address: "Bahçelievler Cad. No: 89, Bahçelievler, Ankara"
  },
  {
    id: 24,
    firstName: "Deniz",
    lastName: "Çolak",
    age: 27,
    gender: "Kadın",
    admissionDate: "2023-05-24",
    diagnosis: "D Vitamini Eksikliği",
    nationalityNumber: "24234567890",
    discharged: true,
    attendingDoctor: "Dr. Elif Demir",
    bloodType: "O-",
    phoneNumber: "5555345678",
    address: "Gazi Mustafa Kemal Blv. No: 12, Çankaya, Ankara"
  },
  {
    id: 25,
    firstName: "Serkan",
    lastName: "Sarıkaya",
    age: 49,
    gender: "Erkek",
    admissionDate: "2023-05-25",
    diagnosis: "Tüberküloz",
    nationalityNumber: "25234567890",
    discharged: false,
    attendingDoctor: "Dr. Mehmet Yılmaz",
    bloodType: "A+",
    phoneNumber: "5556456789",
    address: "Atatürk Cad. No: 34, Alsancak, İzmir"
  },
  {
    id: 26,
    firstName: "Melike",
    lastName: "Kır",
    age: 34,
    gender: "Kadın",
    admissionDate: "2023-05-26",
    diagnosis: "Migren",
    nationalityNumber: "26234567890",
    discharged: true,
    attendingDoctor: "Dr. Ayşe Çelik",
    bloodType: "B+",
    phoneNumber: "5557567890",
    address: "İzmir Cad. No: 56, Konak, İzmir"
  },
  {
    id: 27,
    firstName: "Cem",
    lastName: "Alkan",
    age: 38,
    gender: "Erkek",
    admissionDate: "2023-05-27",
    diagnosis: "Vertigo",
    nationalityNumber: "27234567890",
    discharged: false,
    attendingDoctor: "Dr. Ali Kaya",
    bloodType: "AB+",
    phoneNumber: "5558678901",
    address: "Atatürk Bulv. No: 67, Çankaya, Ankara"
  },
  {
    id: 28,
    firstName: "Gizem",
    lastName: "Erdoğan",
    age: 29,
    gender: "Kadın",
    admissionDate: "2023-05-28",
    diagnosis: "Akne",
    nationalityNumber: "28234567890",
    discharged: true,
    attendingDoctor: "Dr. Elif Yılmaz",
    bloodType: "O+",
    phoneNumber: "5559789012",
    address: "Mustafa Kemal Cad. No: 78, Kızılay, Ankara"
  },
  {
    id: 29,
    firstName: "Onur",
    lastName: "Yıldız",
    age: 40,
    gender: "Erkek",
    admissionDate: "2023-05-29",
    diagnosis: "Böbrek Taşı",
    nationalityNumber: "29234567890",
    discharged: false,
    attendingDoctor: "Dr. Mehmet Çelik",
    bloodType: "A-",
    phoneNumber: "5550890123",
    address: "Atatürk Bulv. No: 89, Alsancak, İzmir"
  },
  {
    id: 30,
    firstName: "Ebru",
    lastName: "Taş",
    age: 33,
    gender: "Kadın",
    admissionDate: "2023-05-30",
    diagnosis: "Varis",
    nationalityNumber: "30234567890",
    discharged: true,
    attendingDoctor: "Dr. Fatma Kara",
    bloodType: "B-",
    phoneNumber: "5551901234",
    address: "Cumhuriyet Cad. No: 90, Bahçelievler, Ankara"
  }
];

export default baseData;