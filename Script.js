const students = [
    {
        regNo: "10250",
        pin: "5832",
        name: "Prem",
        marks: { Tamil: 98, English: 100, Maths: 100, Physics: 100, Chemistry: 100, Biology: 90 },
        total: 588,
        average: 98,
        rank: 1,
        result: "Pass"
    },
    {
        regNo: "10251",
        pin: "7419",
        name: "Rajan",
        marks: { Tamil: 100, English: 100, Maths: 90, Physics: 100, Chemistry: 100, Biology: 98 },
        total: 588,
        average: 98,
        rank: 1,
        result: "Pass"
    },
    {
        regNo: "10252",
        pin: "2964",
        name: "Hari",
        marks: { Tamil: 89, English: 77, Maths: 88, Physics: 64, Chemistry: 89, Biology: 89 },
        total: 496,
        average: 82.67,
        rank: 3,
        result: "Pass"
    },
    {
        regNo: "10253",
        pin: "8157",
        name: "Akash",
        marks: { Tamil: 34, English: 55, Maths: 88, Physics: 56, Chemistry: 67, Biology: 87 },
        total: 387,
        average: 64.5,
        rank: null,
        result: "Fail"
    },
    {
        regNo: "10254",
        pin: "4306",
        name: "Raj",
        marks: { Tamil: 56, English: 65, Maths: 86, Physics: 57, Chemistry: 75, Biology: 89 },
        total: 428,
        average: 71.33,
        rank: 15,
        result: "Pass"
    },
    {
        regNo: "10255",
        pin: "9271",
        name: "Dev",
        marks: { Tamil: 67, English: 47, Maths: 56, Physics: 89, Chemistry: 46, Biology: 90 },
        total: 395,
        average: 65.83,
        rank: 20,
        result: "Pass"
    },
    {
        regNo: "10256",
        pin: "3648",
        name: "Naveen",
        marks: { Tamil: 86, English: 67, Maths: 57, Physics: 34, Chemistry: 45, Biology: 76 },
        total: 365,
        average: 60.83,
        rank: null,
        result: "Fail"
    },
    {
        regNo: "10257",
        pin: "6503",
        name: "yuvan",
        marks: { Tamil: 78, English: 78, Maths: 78, Physics: 67, Chemistry: 46, Biology: 76 },
        total: 423,
        average: 70.5,
        rank: 16,
        result: "Pass"
    },
    {
        regNo: "10258",
        pin: "2187",
        name: "Rohan",
        marks: { Tamil: 56, English: 98, Maths: 87, Physics: 78, Chemistry: 67, Biology: 65 },
        total: 451,
        average: 75.17,
        rank: 8,
        result: "Pass"
    },
    {
        regNo: "10259",
        pin: "7945",
        name: "Praveen",
        marks: { Tamil: 34, English: 83, Maths: 94, Physics: 78, Chemistry: 78, Biology: 76 },
        total: 443,
        average: 73.83,
        rank: null,
        result: "Fail"
    },
    {
        regNo: "10260",
        pin: "5316",
        name: "Chandru",
        marks: { Tamil: 23, English: 86, Maths: 69, Physics: 54, Chemistry: 65, Biology: 78 },
        total: 375,
        average: 62.5,
        rank: null,
        result: "Fail"
    },
    {
        regNo: "10261",
        pin: "8462",
        name: "Das",
        marks: { Tamil: 57, English: 76, Maths: 90, Physics: 46, Chemistry: 64, Biology: 98 },
        total: 431,
        average: 71.83,
        rank: 14,
        result: "Pass"
    },
    {
        regNo: "10262",
        pin: "3095",
        name: "Donald",
        marks: { Tamil: 78, English: 84, Maths: 57, Physics: 78, Chemistry: 67, Biology: 76 },
        total: 440,
        average: 73.33,
        rank: 11,
        result: "Pass"
    },
    {
        regNo: "10263",
        pin: "6728",
        name: "Logesh",
        marks: { Tamil: 89, English: 93, Maths: 78, Physics: 79, Chemistry: 89, Biology: 56 },
        total: 484,
        average: 80.67,
        rank: 4,
        result: "Pass"
    },
    {
        regNo: "10264",
        pin: "4153",
        name: "Surya",
        marks: { Tamil: 49, English: 45, Maths: 36, Physics: 35, Chemistry: 90, Biology: 34 },
        total: 289,
        average: 48.17,
        rank: null,
        result: "Fail"
    },
    {
        regNo: "10265",
        pin: "9836",
        name: "Manoj",
        marks: { Tamil: 67, English: 35, Maths: 23, Physics: 89, Chemistry: 76, Biology: 58 },
        total: 348,
        average: 58,
        rank: null,
        result: "Fail"
    },
    {
        regNo: "10266",
        pin: "2574",
        name: "Jayaraj",
        marks: { Tamil: 54, English: 54, Maths: 34, Physics: 89, Chemistry: 87, Biology: 78 },
        total: 396,
        average: 66,
        rank: null,
        result: "Fail"
    },
    {
        regNo: "10267",
        pin: "7081",
        name: "Vijay",
        marks: { Tamil: 55, English: 45, Maths: 56, Physics: 98, Chemistry: 89, Biology: 90 },
        total: 433,
        average: 72.17,
        rank: 13,
        result: "Pass"
    },
    {
        regNo: "10268",
        pin: "3947",
        name: "Ajith",
        marks: { Tamil: 65, English: 67, Maths: 79, Physics: 76, Chemistry: 96, Biology: 97 },
        total: 480,
        average: 80,
        rank: 5,
        result: "Pass"
    },
    {
        regNo: "10269",
        pin: "8615",
        name: "Adharva",
        marks: { Tamil: 57, English: 85, Maths: 89, Physics: 75, Chemistry: 54, Biology: 96 },
        total: 456,
        average: 76,
        rank: 6,
        result: "Pass"
    },
    {
        regNo: "10270",
        pin: "5269",
        name: "Simbu",
        marks: { Tamil: 77, English: 73, Maths: 68, Physics: 74, Chemistry: 65, Biology: 85 },
        total: 442,
        average: 73.67,
        rank: 10,
        result: "Pass"
    },
    {
        regNo: "10271",
        pin: "1738",
        name: "Dhanush",
        marks: { Tamil: 76, English: 72, Maths: 78, Physics: 74, Chemistry: 67, Biology: 87 },
        total: 454,
        average: 75.67,
        rank: 7,
        result: "Pass"
    },
    {
        regNo: "10272",
        pin: "9452",
        name: "Klrahul",
        marks: { Tamil: 47, English: 77, Maths: 90, Physics: 88, Chemistry: 67, Biology: 65 },
        total: 434,
        average: 72.33,
        rank: 12,
        result: "Pass"
    },
    {
        regNo: "10273",
        pin: "6804",
        name: "surya",
        marks: { Tamil: 53, English: 89, Maths: 45, Physics: 89, Chemistry: 54, Biology: 67 },
        total: 397,
        average: 66.17,
        rank: 18,
        result: "Pass"
    },
    {
        regNo: "10274",
        pin: "3276",
        name: "ragav",
        marks: { Tamil: 62, English: 76, Maths: 56, Physics: 89, Chemistry: 65, Biology: 66 },
        total: 414,
        average: 69,
        rank: 17,
        result: "Pass"
    }
];

function login() {
    const regNo = document.getElementById("regNo").value.trim();
    const pin = document.getElementById("pin").value.trim();

    const student = students.find(
        s => s.regNo === regNo && s.pin === pin
    );

    if (!student) {
        document.getElementById("error").textContent =
            "Invalid Register Number or PIN";
        return;
    }

    document.getElementById("loginSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";

    document.getElementById("studentName").textContent = student.name;
    document.getElementById("studentRegNo").textContent = student.regNo;

    document.getElementById("tamil").textContent = student.marks.Tamil;
    document.getElementById("english").textContent = student.marks.English;
    document.getElementById("maths").textContent = student.marks.Maths;
    document.getElementById("physics").textContent = student.marks.Physics;
    document.getElementById("chemistry").textContent = student.marks.Chemistry;
    document.getElementById("biology").textContent = student.marks.Biology;

    document.getElementById("total").textContent =
        student.total + " / 600";

    document.getElementById("average").textContent =
        student.average.toFixed(2);

    document.getElementById("rank").textContent =
        student.rank || "-";

    const result = document.getElementById("result");
    result.textContent = student.result;
    result.className =
        student.result === "Pass" ? "pass" : "fail";
}

function logout() {
    document.getElementById("resultSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";

    document.getElementById("regNo").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("error").textContent = "";
      }
