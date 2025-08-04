
"use client"
import React from 'react'
import Link from 'next/link'
import html2pdf from 'html2pdf.js'
import SidebarResumeWithCard from './different-resume-styles/sidebar-resume-with-card'
import { Button } from '@/components/ui/button'
import { Download } from "lucide-react";
import { useState } from "react";
import { motion } from 'framer-motion';
import { useAboutMe } from '@/hooks/local-data/useAboutMe'
import { getAboutMe } from '@/utils/getAboutMe'


const HtmlToPdfResume = () => {
  const { aboutMe: data, loading: fetchLoading, error } = useAboutMe();

  const aboutMe = getAboutMe();

  const downloadPDF = () => {
    const element = document.getElementById('resume-content');
    if (element) {
      html2pdf().from(element).save('resume.pdf');
    }
  };

  const resumeContent = document.getElementById('resume-content');
  const [isHovered, setIsHovered] = useState(false);

  // if (resumeContent) {
  //   document.getElementById('print-resume')?.addEventListener('click', () => {
  //     setTimeout(() => {
  //       window.print();
  //     }, 500);
  //   });
  // }

  const printResume = () => {



    const printContent = document.getElementById('resume-content');
    if (printContent) {
      const printWindow = window.open('', '', 'height=600,width=800');
      if (printWindow) {
        printWindow.document.write('<html><head><title>Resume</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(printContent.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      } else {
        console.error('Failed to open print window');
      }
    } else {
      console.error('Failed to find resume content element');
    }
  }


  return (
    <>
      <div id="resume-content">
        {data && <SidebarResumeWithCard data={aboutMe} />}
      </div>
      {/* <div id="resume-content" className="p-8 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-blue-600">John Doe</h1>
          <h2 className="text-xl font-semibold text-gray-600">Software Developer</h2>
          <div className="mt-4">
            <p><strong>Contact:</strong> john.doe@example.com | (123) 456-7890</p>
            <p className="mt-2"><strong>About Me:</strong> Passionate software developer with experience in building web applications using modern technologies.</p>
            <p className="mt-2"><strong>Skills:</strong> JavaScript, React, Next.js, TypeScript, Node.js</p>
            <p className="mt-2"><strong>Experience:</strong></p>
            <ul className="list-disc list-inside mt-2">
              <li>Software Engineer at Tech Company (2022-Present)</li>
              <li>Junior Developer at Web Agency (2020-2022)</li>
            </ul>
            <p className="mt-2"><strong>Education:</strong></p>
            <ul className="list-disc list-inside mt-2">
              <li>Bachelors in Computer Science, Example University</li>
            </ul>
          </div>
        </div>
      </div> */}
      {/*
      <div className="fixed bottom-0 right-0 mb-4 mr-4">
        <Button
          onClick={downloadPDF}
          className="bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
        >
          <Download size={24} />
        </Button>
      </div> */}

      <div className="fixed bottom-4 right-4">
        <Button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          <Download className="h-5 w-5 animate-bounce" />
          <span className="sr-only">Download</span>
        </Button>
      </div>


      <div className="mt-6 flex space-x-4">
        <Button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all hover:scale-105">
          <Download className="mr-2 h-5 w-5 animate-bounce" />
          Download
        </Button>
        {/* <Button
          className="relative flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => alert("Download triggered!")}
        >
          <Download
            className={`w-5 h-5 transform transition-transform duration-300 ${isHovered ? "rotate-180" : "rotate-0"
              }`}
          />
          <span>Download</span>
        </Button> */}

        {/* <Button
          onClick={downloadPDF}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none hidden-on-print"
        >
          <div className="flex items-center space-x-2">
            <Download className="animate-bounce" size={20} />
            <span>Download PDF</span>
          </div>
        </Button> */}


        {/* <Button
          onClick={downloadPDF}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none hidden-on-print"
        >
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <Download size={20} />
            </motion.div>
            <span>Download PDF</span>
          </div>
        </Button> */}

        {/* <Button
          onClick={downloadPDF}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none hidden-on-print"
        >
          Download PDF
        </Button> */}
        {/* <button
          id="print-resume"
          onClick={printResume}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none hidden-on-print"
        >
          Print Resume
        </button> */}
      </div>
    </>
  )
}

export default HtmlToPdfResume
