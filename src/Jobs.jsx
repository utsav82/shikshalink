import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import { useState } from "react";
import Select from "react-select";
import { useRef } from "react";

function Jobs() {
  const [search, setSearch] = useState("");
  const myRef = useRef(null);
  const options = [
    { value: "cleaner", label: "Cleaner" },
    { value: "marketing Intern", label: "Marketing Intern" },
    { value: "manager", label: "Manager" },
    { value: "teacher", label: "Teacher" },
  ];
  const handleSubmit = (event) => {
    setTimeout(
      () =>
        myRef.current.scrollIntoView({
          behavior: "smooth",
        }),
      100
    );
    if (event) {
      setSearch(event.value);
    } else {
      setSearch("");
    }
  };
  const jobs = [
    {
      title: "Cleaner",
      description:
        "We are looking for a professional cleaner to maintain a clean and tidy environment in our facility.",
      link: "https://example.com/cleaner-job",
      image:
        "https://media.istockphoto.com/id/1299646471/photo/senior-adult-janitor-mops-floor-in-school-locker-room.jpg?s=612x612&w=0&k=20&c=IvVO40Eg4OQvtaqXQ6FsjywxS7T8UvtQ1jEsbYrplXE=",
    },
    {
      title: "Marketing Intern",
      description:
        "We are seeking a motivated Marketing Intern to assist our team with various marketing and communication initiatives.",
      link: "https://example.com/marketing-intern-job",
      image:
        "https://media.istockphoto.com/id/1176842744/photo/serious-african-woman-boss-explain-paperwork-at-group-meeting.jpg?s=612x612&w=0&k=20&c=jJr6OzeXqEojLq5bWy6Chaccy9DPl30-hO9xVvlNTJo=",
    },
    {
      title: "Manager",
      description:
        "We are looking for an experienced Manager to lead and manage our team effectively.",
      link: "https://example.com/manager-job",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9H6ShDno5Uy_1thXtdObGb8VY-q30rZLal7RHt3Rl&s",
    },
    {
      title: "Teacher",
      description:
        "We are seeking a qualified Teacher to join our school faculty and help students learn and grow.",
      link: "https://example.com/teacher-job",
      image: "https://thumbs.dreamstime.com/b/teacher-9707054.jpg",
    },
  ];
  return (
    <Wrapper>
      <div className="section">
        <div className="container">
          <h1>Find Jobs for You</h1>
          <div className="search__container">
            {/* <input className="search__input" type="text" placeholder="Search" onChange={handleChange}  /> */}
            <Select
              onChange={handleSubmit}
              options={options}
              isClearable
              isSearchable
              unstyled
              className="search__input"
              classNamePrefix="react-select"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div>
        <ul
          className="numbered-items | flow | container"
          style={{ marginTop: "5em" }}
        >
          <li>
            <div className="flow" style={{ marginTop: "3rem" }}>
              <h3
                className="numbered-items__title"
                style={{ fontWeight: "700", fontSize: "2rem" }}
              >
                Submit Your Application
              </h3>
              <p className="numbered-items__body" data-width="wide">
                The first step in applying for a job is to submit your
                application This is your opportunity to introduce yourself to
                the employer and showcase your qualifications and experience.
              </p>
            </div>
          </li>
          <li>
            <div className="flow" style={{ marginTop: "3rem" }}>
              <h3
                className="numbered-items__title "
                style={{ fontWeight: "700", fontSize: "2rem" }}
              >
                Your Application Is Reviewed
              </h3>
              <p className="numbered-items__body" data-width="wide">
                After receiving all the applications, the hiring manager will
                typically review them to identify the most promising candidates.
                If you're shortlisted, you'll usually be contacted to arrange an
                interview.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="flow" style={{ marginTop: "3rem" }}>
              <h3
                className="numbered-items__title"
                style={{ fontWeight: "700", fontSize: "2rem" }}
              >
                Attend The Interview{" "}
              </h3>
              <p className="numbered-items__body" data-width="wide">
                If you're shortlisted, you'll typically be invited to attend an
                interview. This is your chance to make a good impression and
                demonstrate why you're the right person for the job.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div
        className="jobs | container"
        ref={myRef}
        style={{ marginTop: "5em" }}
      >
        {jobs
          .filter((job) => {
            if (search !== "") {
              return job.title.toLowerCase() === search.toLowerCase();
            }
            return true;
          })
          .map((job) => (
            <Card
              title={job.title}
              description={job.description}
              link={job.link}
              image={job.image}
            />
          ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .section {
    z-index: 10;
    width: 100vw;
    height: 60vh;
    /* background-image: url("https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg"); */
    background-image: url("https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/images/Hero%20image_new-1556706557568.png");
    background-size: cover;
  }
  h1 {
    padding-top: 7.5rem;
    color: #fff;
    text-shadow: 1px 1px 2px black;
  }
  .search {
    &__container {
      padding-top: 64px;
    }

    &__input {
      width: 100%;
      padding: 12px 24px;

      background-color: transparent;
      transition: transform 250ms ease-in-out;
      font-size: 14px;
      line-height: 18px;

      color: white;
      background-color: transparent;

      .react-select__menu {
        background: #fff;
        color: black;
        border-radius: 3px;
      }

      .react-select__option {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
      }
      .react-select__option:hover {
        background: rgba(144, 224, 239, 1);
      }

      /* background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%23fff'%3E%3Cpath d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E"); */

      background-repeat: no-repeat;
      background-size: 18px 18px;
      background-position: 95% center;
      border-radius: 50px;
      border: 1px solid white;
      transition: all 250ms ease-in-out;
      backface-visibility: hidden;
      transform-style: preserve-3d;

      &::placeholder {
        color: white;
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      &:hover,
      &:focus {
        padding: 12px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid white;
        border-radius: 0;
        background-position: 100% center;
      }
    }
  }

  .numbered-items {
    margin-top: 3rem;
    counter-reset: count;
    width: fit-content;
    margin-inline: auto;
  }

  .numbered-items li {
    counter-increment: count;
  }

  .numbered-items div {
    display: grid;
    position: relative;
    align-items: center;
    column-gap: 0.75rem;
    grid-template-columns: min-content 1fr;
  }

  .numbered-items__title {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    line-height: 1;
  }

  .numbered-items__body {
    grid-column: 1 / -1;
  }

  @media (min-width: 30em) {
    .numbered-items__body {
      grid-column: 2 / -1;
    }
  }

  .numbered-items div::before,
  .numbered-items div::after {
    height: 40px;
  }

  .numbered-items div::before {
    content: "0" counter(count);
    display: flex;
    align-items: center;
    color: hsl(0 0% 100%);
    font-weight: 700;
    background-color: #00b4d8;
    padding: 0 1.5rem;
    border-radius: 100vw;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  @media (max-width: 30em) {
    .numbered-items div::after {
      --bg: hsl(13, 100%, 96%);
      content: "";
      display: block;
      z-index: -1;
      border-radius: 100vw 0 0 100vw;
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      box-shadow: 5em 0 0 var(--bg);
      background: var(--bg);
    }
  }
  .jobs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default Jobs;
