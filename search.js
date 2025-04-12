const books = [ 
    { title: "android studio", link: " https://drive.google.com/file/d/1QzJwzI_hnd__ttQFaF6bVmLIq-8JY4DX/view?usp=drivesdk " },
      { title: "python", link: " https://drive.google.com/file/d/1RMFAy1rE6qC19_LcPqQbmmfr72JOVrje/view?usp=drivesdk" },
      { title: "html", link: " https://drive.google.com/file/d/1LfgAKvGDnolug8avshckXEbhLIennKaq/view?usp=drivesdk " },
      { title: "javascript", link: " https://drive.google.com/file/d/1LfgAKvGDnolug8avshckXEbhLIennKaq/view?usp=drivesdk  " },
      { title: "css", link: "  https://drive.google.com/file/d/1RQ1lnG92QQocSX9m5g73jdr_n7hL-8aB/view?usp=drivesdk" },
      { title: "ML PYTHON orielly", link: " https://drive.google.com/file/d/1RTrzl4E-UtlO6IfP2IXkwEY9j8V9bSxa/view?usp=drivesdk " },
      { title: "java orielly", link: "  https://drive.google.com/file/d/1Mwrve4vWJZDIP4anDJvSr8vwiyeGwRGZ/view?usp=drivesdk " },
      { title: "ANDROID APPLICATION DEVELOPMENT orielly ", link: "  https://drive.google.com/file/d/1MZkJteva-ziYqLuzWg5TvpSfgUTipPc1/view?usp=drivesdk" },
      { title: "javascript orielly", link: " https://drive.google.com/file/d/1Mav9iIdRL_x70zQ6cNC-yEHO-u5rF_aG/view?usp=drivesdk" },
      { title: "postgresql orielly", link: "  https://drive.google.com/file/d/1MYh0piq7A4LEnUxQE3gzAmVr43RN-3Ar/view?usp=drivesdk " },
      { title: "software development", link: "  https://drive.google.com/file/d/1MIfUEMduZPWM4gA5BxjFufpwVeogxXQY/view?usp=drivesdk" },
      { title: "android development", link: "  https://drive.google.com/file/d/1MFBf2C85gviRuHsaT1Lgp77uCVmGCidn/view?usp=drivesdk " },
      { title: "sql", link: "  https://drive.google.com/file/d/1MRnZN_kj6VuQiMYhk-R432ViWpgO1s_Z/view?usp=drivesdk" },
      { title: "java", link: "  https://drive.google.com/file/d/1MRLd9T8rk7uTLxhgjaO84zElzHVjG6Z8/view?usp=drivesdk" },
      { title: "jva servlets and jsp", link: "  https://drive.google.com/file/d/1MF1PQDWd9fQB7LGTnFp9eGwI3QO3ZiO1/view?usp=drivesdk " },
      { title: "DSA handwritten notes", link: "  https://drive.google.com/file/d/1N9jbAG5lptGkZ3BNsQSxOkyXBZduz7Gh/view?usp=drivesdk " },
      { title: "java handwritten notes ", link: "  https://drive.google.com/file/d/1QwAOpEj4CcCuZ8fsz2-34uyBTk3zIadJ/view?usp=drivesdk" },
      { title: "html handwritten notes ", link: " https://drive.google.com/file/d/1NFnSRKEtuEpXqGyKPFnW0JTiEYlO4F_3/view?usp=drivesdk " },
      { title: "css handwritten notes", link: "  https://drive.google.com/file/d/1N9eYfXsYVA9dKH3o9QQbBP1U6LBH4LRk/view?usp=drivesdk " },
      { title: "javascript handwritten notes", link: "  https://drive.google.com/file/d/1NCbgv8aBlrxBMqXjlNvk-ehYPAgqjAhT/view?usp=drivesdk" },
      { title: "tcs NQT syllabus", link: "  https://drive.google.com/file/d/1Pf95XxZIlNs7ETLPKWFDYjrbD3uJUdQe/view?usp=drivesdk  " },
      { title: "tcs NQT previous year question paper", link: " https://drive.google.com/file/d/1IK5jGW3myYQmX66CFCmR8wu3T75pYvoe/view?usp=drivesdk " },
      { title: "Tcs NQT Numerical", link: " https://drive.google.com/file/d/1IAX5ZnS8bAjtSz3xZ71YLf-XCdQH58Vo/view?usp=drivesdk" },
      { title: "Tcs NQT Verbal", link: "  https://drive.google.com/file/d/1IGRE-vSsEImX_5kZH1ZyiDjvJw-qKD--/view?usp=drivesdk " },
      { title: "Tcs NQT Reasoning", link: " https://drive.google.com/file/d/1IA83WdFhv6uJKac37Y-tNP7_00EBzRpN/view?usp=drivesdk " },
      { title: "Hackerrank", link: "https://www.hackerrank.com/contests/practice/challenges/  " },
      { title: "codechef", link: " https://www.codechef.com/ " },
      { title: "geeksforgeeks", link: " https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions " },
      { title: "leetcode", link: " https://leetcode.com/problemset/" },
      { title: "codewars", link: " https://www.codewars.com/collections/practice-problems-1 " },
      { title: "java practice problems pdf1", link: "  https://drive.google.com/file/d/1Q9GA4n0cZx78UAiVvuSrMw8TPmhSysmX/view?usp=drivesdk " },
      { title: "java pratcice problems pdf2", link: "  https://drive.google.com/file/d/1Q6fvXshGy1uVEQtnf7BHpTBQPTjltF_k/view?usp=drivesdk" },
      { title: "TCS NQT ADVANCE CODING", link: "  https://drive.google.com/file/d/1Q9n8sbZMZ7BXqa4-7uikAhQd4_XSus4-/view?usp=drivesdk " },
      { title: "java cheatsheet1", link: "  https://drive.google.com/file/d/1QWRcWJH1n3e_9DbdOk3vs1TypihCkDYd/view?usp=drivesdk " },
      { title: "java cheatsheet2", link: "  https://drive.google.com/file/d/1QAHvy2G8eZkmRVVMYrGQz8ebATLzOKQD/view?usp=drivesdk" },
      { title: "atomic habits", link: "  https://drive.google.com/file/d/1SNrh78qpSnb9GDY_Gchxusv4oRRJfa9G/view?usp=drivesdk " },
      { title: "rs aggarwal", link: "  https://drive.google.com/file/d/1S07_tlvBEEonsg9tOP-H95_2-Fbsbs4Z/view?usp=drivesdk " },
      { title: "coding book", link: "  https://drive.google.com/file/d/1RrUM_39kevwmrEt8m9xNH-8GKHDMtrgY/view?usp=drivesdk" },
      { title: "power of subconcious mind", link: "  https://drive.google.com/file/d/1SaS_frc_U5CB0lzi6_fNqetdoVv4-Qfh/view?usp=drivesdk " },
      { title: "resume", link: "  https://drive.google.com/file/d/1T1abzFFzqESd06E3fGA310Spi2BTE9Sv/view?usp=drivesdk " },
      ];
  
  // Get the search input and book list elements
  const searchInput = document.getElementById("search-input");
  const bookList = document.getElementById("book-list");
  
  // Function to render the book list
  function renderBookList(books) {
      const bookListHtml = books.map((book) => {
          return `<li><a href="${book.link}" target="_blank">${book.title}</a></li>`;
      }).join("");
      bookList.innerHTML = bookListHtml;
  }
  
  // Render the initial book list
  renderBookList(books);
  
  // Add event listener to the search input
  searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredBooks = books.filter((book) => {
          return book.title.toLowerCase().includes(searchTerm);
      });
      renderBookList(filteredBooks);
  });
  