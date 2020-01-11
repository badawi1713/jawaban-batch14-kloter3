// Fungsi untuk menampilkan data profil diri
function myProfile() {
  var profile = {
    name: "Dzaky Ahmad Badawi",
    age: 22,
    address:
      "Jl. Sukun JEC Residence Blok E-4, Banguntapan, Bantul, D.I Yogyakarta",
    hobbies: ["Swimming", "Digital Art", "Watch Movies"],
    is_married: false,
    list_school: [
      {
        name: "Islamic University of Indonesia",
        year_in: "2015",
        year_out: "2019",
        major: "Informatics"
      },
      {
        name: "Balikpapan Senior High School 5",
        year_in: "2012",
        year_out: "2015",
        major: "Science"
      }
    ],
    skills: [
      {
        skill_name: "Data Entry",
        level: "expert"
      },
      {
        skill_name: "Web Programming",
        level: "advanced"
      },
      {
        skill_name: "Graphic Design",
        level: "advanced"
      },
      {
        skill_name: "UI/UX Design",
        level: "beginner"
      }
    ],
    interest_in_coding: true
  };
  return profile;
}

console.log("Profile: ", myProfile());
