import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useFormContext } from "../../context/FormContext";
// import { Box, Button, Loader, LoadingOverlay } from "@mantine/core";

const Doc = () => {
  const { form } = useFormContext();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const buttonRef = useRef(null);

  // const medicalImageFile = form.watch("medicalimage");
  // const photoFullFile = form.watch("photofull");
  // const passportFile = form.watch("passport");
  // const photo3by4File = form.watch("photo3by4");
  console.log(form.getValues("passport"));
  const imageUrl = URL.createObjectURL(form.getValues("passport"));
  const image3by44 = URL.createObjectURL(form.getValues("photo3by4"));
  const imageFulll = URL.createObjectURL(form.getValues("photofull"));
  const medicalImagee = URL.createObjectURL(form.getValues("medicalimage"));

  const Data = {
    fullName: form.getValues("fullName"),
    contr: form.getValues("contract"),
    position: form.getValues("position"),
    salary: form.getValues("salary"),
    sex: form.getValues("sex"),
    personalInformation: {
      passportDetails: {
        nationality: form.getValues("nationality"),
        passportNo: form.getValues("passportNo"),
        religion: form.getValues("religion"),
        dateOfIssue: form.getValues("dateOfIssue"),
        age: form.getValues("age"),
        dateOfExpiry: form.getValues("dateOfExpiry"),
        birthDay: form.getValues("birthDay"),
        birthPlace: form.getValues("birthPlace"),
        civilStatus: form.getValues("civilStatus"),
        height: form.getValues("height"),
        weight: form.getValues("weight"),
        education: form.getValues("education"),
        telephoneNo: form.getValues("telephoneNo"),
      },
      language: {
        arabic: form.getValues("arabic"),
        english: form.getValues("english"),
      },
      workExperience: {
        numberOfYears: form.getValues("numberOfYears"),
        country: form.getValues("country"),
      },
      householdWorkExperience: {
        careGiving: form.getValues("careGiving"),
        cleaning: form.getValues("cleaning"),
        cooking: form.getValues("cooking"),
        laundry: form.getValues("laundry"),
        ironing: form.getValues("ironing"),
        babySitting: form.getValues("babySitting"),
      },
    },
    remarks: form.getValues("remarks"),
  };

  // You can now destructure the data as you have done in your code
  const {
    fullName,
    contr,
    position,
    salary,
    sex,
    personalInformation: {
      passportDetails: {
        nationality,
        passportNo,
        religion,
        dateOfIssue,
        age,
        dateOfExpiry,
        birthDay,
        birthPlace,
        civilStatus,
        height,
        weight,
        education,
        telephoneNo,
      },
      language: { arabic: languageArabic, english: languageEnglish },
      workExperience: { numberOfYears, country: workCountry },
      householdWorkExperience: {
        careGiving,
        cleaning,
        cooking,
        laundry,
        ironing,
        babySitting,
      },
    },
    remarks,
  } = Data;

  // console.log(Data.householdWorkExperience.careGiving);
  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4"); // Set page orientation and dimensions to A4
    const element1 = ref1.current;
    const element2 = ref2.current;
    const element3 = ref3.current;

    setIsLoading(true);

    html2canvas(element1, {
      scale: 5, // Increase scale for better image quality
      letterRendering: true, // Enable letter rendering for sharper text
      width: 800, // Set width to match A4 page width (in mm) at 300 DPI (4 times the default scale)
      height: 1300, // Set height to match A4 page height (in mm) at 300 DPI (4 times the default scale)
      useCORS: true, // Set useCORS to tru
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");
        return doc.addImage(imgData, "JPEG", 6, 10, 215, 285); // Add image to PDF with exact positioning
      })
      .then(() => {
        // Wait for first page's image to be added before adding second page
        return html2canvas(element2, {
          scale: 5, // Increase scale for better image quality
          // letterRendering: true, // Enable letter rendering for sharper text
          width: 550, // Set width to match A4 page width (in mm) at 300 DPI (4 times the default scale)
          height: 409, // Set height to match A4 page height (in mm) at 300 DPI (4 times the default scale)
          useCORS: true, // Set useCORS to tru
        });
      })
      .then((canvas) => {
        const imgData1 = canvas.toDataURL("image/jpeg");

        doc.addPage();

        // Add image to second page
        doc.addImage(imgData1, "JPEG", 5, 25, 200, 120);
      })
      .then(() => {
        // Wait for first page's image to be added before adding second page
        return html2canvas(element3, {
          scale: 5, // Increase scale for better image quality
          // letterRendering: true, // Enable letter rendering for sharper text
          width: 750, // Set width to match A4 page width (in mm) at 300 DPI (4 times the default scale)
          height: 1100, // Set height to match A4 page height (in mm) at 300 DPI (4 times the default scale)
          useCORS: true, // Set useCORS to tru
        });
      })
      .then((canvas) => {
        const medical = canvas.toDataURL("image/jpeg");

        doc.addPage();

        // Add image to second page
        doc.addImage(medical, "JPEG", 15, 25, 250, 700);
      })
      .finally(() => {
        doc.save(`${fullName} CV.pdf`);
        setIsLoading(false);
      });
  };

  return (
    <>
      <div
      // style={{
      //   position: "absolute",
      //   top: -9999 /* or any large negative value */,
      //   left: -9999 /* or any large negative value */,
      // }}
      >
        <div ref={ref1}>
          <h1
            style={{
              marginTop: "15pt",
              marginBottom: "0pt",
              textAlign: "left",
              marginLeft: "170pt",
              pageBreakInside: "avoid",
              pageBreakAfter: "avoid",
              lineHeight: "115%",
              fontSize: "48pt",
            }}
          >
            <span style={{ fontFamily: "Cambria", color: "#446b3d" }}>
              EHA AGENCY
            </span>
          </h1>
          <h1
            style={{
              marginTop: "24pt",
              marginBottom: "0pt",
              textAlign: "center",
              marginLeft: "200pt",
              pageBreakInside: "avoid",
              pageBreakAfter: "avoid",
              lineHeight: "115%",
              fontSize: "14pt",
            }}
          >
            <a name="_kizr89gdyvy6" />
            <span style={{ fontFamily: "Arial", color: "#366091" }}>
              &nbsp;
            </span>
          </h1>
          <table
            cellSpacing={0}
            cellPadding={0}
            style={{
              width: "521.98pt",
              marginRight: "9pt",
              marginLeft: "9pt",
              borderCollapse: "collapse",
              float: "left",
            }}
          >
            <tbody>
              <tr style={{ height: "21.85pt" }}>
                <td
                  colSpan={4}
                  rowSpan={4}
                  style={{
                    borderTop: "1pt solid #4bacc6",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.55pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    // paddingRight: "5.03pt",
                    // paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "11pt",
                    }}
                  >
                    <img
                      src={image3by44}
                      alt="Selected"
                      width={170}
                      height={210}
                    />
                  </p>
                </td>
                <td
                  colSpan={5}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Asking Salary</span>
                    </strong>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>&nbsp;</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#446b3d" }}>{salary}</span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRight: "1pt solid #8064a2",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "4.9pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "14pt",
                    }}
                  >
                    <span
                      style={{ fontFamily: "Cambria", color: "#31849b" }}
                      dir="rtl"
                    >
                      المعاش الشهر
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "22pt" }}>
                <td
                  colSpan={5}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Position</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#446b3d" }}>{position}</span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRight: "1pt solid #8064a2",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "4.9pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "14pt",
                    }}
                  >
                    <span
                      style={{ fontFamily: "Cambria", color: "#31849b" }}
                      dir="rtl"
                    >
                      نوع الوظيفة
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "12.4pt" }}>
                <td
                  colSpan={5}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Contract</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#446b3d" }}>{contr}</span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRight: "1pt solid #8064a2",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "4.9pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "14pt",
                    }}
                  >
                    <span
                      style={{ fontFamily: "Cambria", color: "#31849b" }}
                      dir="rtl"
                    >
                      مدت العقد
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "50.25pt" }}>
                <td
                  colSpan={5}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "10pt",
                      marginBottom: "0pt",
                      lineHeight: "200%",
                      fontSize: "14pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Full Name&nbsp;</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "10pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      lineHeight: "200%",
                      fontSize: "14pt",
                    }}
                  >
                    <strong>
                      <span style={{ fontFamily: "Ebrima", color: "#446b3d" }}>
                        {fullName}
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRight: "1pt solid #8064a2",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "4.9pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "14pt",
                    }}
                  >
                    <span
                      style={{ fontFamily: "Cambria", color: "#31849b" }}
                      dir="rtl"
                    >
                      الإسم الكامل
                    </span>
                    <span style={{ fontFamily: "Cambria", color: "#31849b" }}>
                      &nbsp;&nbsp;
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "1.75pt" }}>
                <td
                  colSpan={9}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                    backgroundColor: "#83c78e",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        Personal Information
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                    backgroundColor: "#83c78e",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "16pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Passport details</span>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "17pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Nationality</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>{nationality}</span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      الجنسية
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Passport No</span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#446b3d" }}>{passportNo}</span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRight: "1pt solid #8064a2",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "4.9pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      رقم الجواز
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "20.7pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Religion&nbsp;</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ fontFamily: "Nyala", color: "#446b3d" }}>
                      {religion}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      الديانة
                    </span>
                    &nbsp;&nbsp;
                  </p>
                </td>
                <td
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        Date of issue&nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ fontFamily: "Ebrima", color: "#446b3d" }}>
                        {dateOfIssue}
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRight: "1pt solid #8064a2",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "4.9pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      تاريخ الإصدار
                    </span>
                    &nbsp;
                  </p>
                </td>
              </tr>
              <tr style={{ height: "22.2pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Age&nbsp;</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "17pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>{age}</span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      العمر
                    </span>
                    &nbsp;&nbsp;&nbsp;
                  </p>
                </td>
                <td
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        Date of expiry&nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#446b3d" }}>{dateOfExpiry}</span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRight: "1pt solid #8064a2",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "4.9pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      تاريخ الإنتهاء
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "14.45pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Birth date</span>
                    </strong>
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>{birthDay}&nbsp;</span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      الميلاد
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  rowSpan={18}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "16pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>&nbsp;</span>
                    </strong>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "16pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </strong>

                    <img
                      src={imageFulll}
                      alt="Selected"
                      width={336}
                      height={500}
                    />

                    <strong>
                      <span style={{ color: "#31849b" }}>&nbsp;&nbsp;</span>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "14.45pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Birth place</span>
                    </strong>
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        &nbsp;&nbsp;&nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>{birthPlace}</span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      مكان الميلاد
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "28.9pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        Civil status&nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>{civilStatus}</span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      الحالت الإجتماعية
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "17pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Height</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>{height}</span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      الطول
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "14.45pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Weight</span>
                    </strong>
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>{weight}</span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      الوزن
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "14.45pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Education</span>
                    </strong>
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>{education}</span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      تعليم
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "1.75pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Telephone No.</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={8}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>{telephoneNo}</span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "3.5pt" }}>
                <td
                  colSpan={9}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                    backgroundColor: "#83c78e",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "16pt",
                    }}
                  >
                    <strong>
                      <span
                        style={{ width: "50.25pt", display: "inline-block" }}
                      >
                        &nbsp;
                      </span>
                    </strong>
                    <strong>
                      <span
                        style={{
                          width: "17.23pt",
                          backgroundColor: "#83c78e",
                          display: "inline-block",
                        }}
                      >
                        &nbsp;
                      </span>
                    </strong>
                    <strong>
                      <span
                        style={{ color: "#31849b", backgroundColor: "#83c78e" }}
                      >
                        Work experience
                      </span>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "3.5pt" }}>
                <td
                  colSpan={3}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    // paddingRight: "5.03pt",
                    // paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Number of years</span>
                    </strong>
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={5}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "14pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#446b3d" }}>&nbsp;&nbsp;</span>
                    </strong>
                    <strong>
                      <span style={{ color: "#446b3d" }}>
                        {numberOfYears}&nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      مدت سينين
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "24.25pt" }}>
                <td
                  colSpan={3}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Country</span>
                    </strong>
                    <strong>
                      <span style={{ color: "#31849b" }}>&nbsp;&nbsp;</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={5}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <a name="_gjdgxs" />
                    <strong>
                      <span style={{ color: "#446b3d" }}>{workCountry}</span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      الدولة
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={9}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                    backgroundColor: "#83c78e",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "14pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </strong>
                    <strong>
                      <span style={{ color: "#31849b" }}>Language Skill</span>
                    </strong>
                    <strong>
                      <span
                        style={{ width: "36.79pt", display: "inline-block" }}
                      >
                        &nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "22pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Arabic</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={6}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#446b3d" }}>{languageArabic}</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      العربية
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "21.1pt" }}>
                <td
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>English</span>
                    </strong>
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={6}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#446b3d" }}>
                        {languageEnglish}
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#31849b" }} dir="rtl">
                      الإنجليزية
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={9}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                    backgroundColor: "#83c78e",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "16pt",
                    }}
                  >
                    <strong>
                      <span
                        style={{ color: "#31849b", backgroundColor: "#83c78e" }}
                      >
                        Household work experience
                      </span>
                    </strong>
                    <strong>
                      <span
                        style={{ width: "62.55pt", display: "inline-block" }}
                      >
                        &nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Cleaning&nbsp;</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>
                      {cleaning ? "YES" : "NO"}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span
                      style={{ fontFamily: "Cambria", color: "#31849b" }}
                      dir="rtl"
                    >
                      التنظيف
                    </span>
                    &nbsp;
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Cooking</span>
                    </strong>
                    <strong>
                      <span style={{ color: "#31849b" }}>&nbsp;&nbsp;</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>
                      {cooking ? "YES" : "NO"}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span
                      style={{ fontFamily: "Cambria", color: "#31849b" }}
                      dir="rtl"
                    >
                      الطبخ
                    </span>
                    &nbsp;
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Laundry</span>
                    </strong>
                    <strong>
                      <span style={{ color: "#31849b" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>
                      {laundry ? "YES" : "NO"}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span
                      style={{ fontFamily: "Cambria", color: "#31849b" }}
                      dir="rtl"
                    >
                      التغسيل
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "17.7pt" }}>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Ironing</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>
                      {ironing ? "YES" : "NO"}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span
                      style={{ fontFamily: "Cambria", color: "#31849b" }}
                      dir="rtl"
                    >
                      الكوي
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    dir="rtl"
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "left",
                      fontSize: "12pt",
                    }}
                  >
                    <span
                      style={{ fontWeight: "bold", color: "#31849b" }}
                      dir="ltr"
                    >
                      Baby sitting
                    </span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>
                      {babySitting ? "YES" : "NO"}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span
                      style={{ fontFamily: "Cambria", color: "#31849b" }}
                      dir="rtl"
                    >
                      العناية الأطفال
                    </span>
                    &nbsp;
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                    backgroundColor: "#83c78e",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Remarks</span>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "22.75pt" }}>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeft: "1pt solid #8064a2",
                    borderBottom: "1pt solid #4bacc6",
                    paddingRight: "5.03pt",
                    paddingLeft: "4.9pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#31849b" }}>Caregiving</span>
                    </strong>
                    <strong>
                      <span style={{ color: "#31849b" }}>&nbsp;&nbsp;</span>
                    </strong>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottom: "1pt solid #4bacc6",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "12pt",
                    }}
                  >
                    <span style={{ color: "#446b3d" }}>
                      {careGiving ? "YES" : "NO"}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottom: "1pt solid #4bacc6",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "right",
                      fontSize: "12pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        color: "#31849b",
                      }}
                      dir="rtl"
                    >
                      ﺘﻘﺪﻳﻢ ﺍﻟﺮﻋﺎﻳﺔ
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottom: "1pt solid #4bacc6",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "12pt",
                    }}
                  >
                    <strong>
                      <span style={{ color: "#446b3d" }}>{remarks}</span>
                    </strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "115%",
              fontSize: "24pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Algerian", color: "#ff0000" }}>
                &nbsp;&nbsp;&nbsp;
              </span>
            </strong>
          </p>
        </div>
        <div
          ref={ref2}
          style={{
            width: "545.85pt",
            marginRight: "9pt",
            marginLeft: "9pt",
            borderCollapse: "collapse",
            float: "left",
          }}
        >
          <img src={imageUrl} alt="Selected" width={550} height={409} />
        </div>

        <div
          ref={ref3}
          style={{
            width: "545.85pt",
            marginRight: "9pt",
            marginLeft: "9pt",
            borderCollapse: "collapse",
            float: "left",
          }}
        >
          <img src={medicalImagee} alt="Selected" width={550} height={409} />
        </div>
      </div>

      <div style={{ position: "", bottom: 0, right: 0, margin: "20px" }}>
        <button color="red" onClick={generatePDF}>
          Download PDF
        </button>
        {/* write loder for the loading downloading page. */}
      </div>
    </>
  );
};

export default Doc;
