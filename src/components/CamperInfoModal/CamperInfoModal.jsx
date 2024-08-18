import React from "react";

import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoClose, IoPersonSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import clsx from "clsx";
import style from "./CamperInfoModal.module.css";

import DetailsComponent from "../DetailsComponent/DetailsComponent";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Success!");

export default function CamperInfoModal({ camper, onClose }) {
  const {
    bodyType,
    length,
    width,
    height,
    tank,
    consumption,
    details,
    description,
    reviews,
    name,
    price,
    gallery,
    rating,
    location,
  } = camper;
  const [activeSection, setActiveSection] = useState(null);

  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.date()
      .required("Booking date is required")
      .min(new Date(), "Booking date cannot be in the past"),
    comment: Yup.string(),
  });

  const renderRatingStars = (rating) => {
    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            color={index < rating ? "#FFC531" : "#e4e5e9"}
            size={20}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={style.backdrop} onClick={handleClickBackdrop}>
      <div className={style.modalContent}>
        <button onClick={onClose} className={style.modalCloseBtn}>
          <IoClose size="24px" />
        </button>
        <h2>{name}</h2>
        <div className={style.mainInfo}>
          <p>
            <CiLocationOn /> {location}
          </p>
          <p>
            <FaStar color="#FFC531" /> {rating}
          </p>
        </div>
        <p className={style.price}>€{price}</p>

        <div className={style.modalInfo}>
          <Slider {...gallerySettings} className={style.modalGallery}>
            {gallery.map((image, index) => (
              <div key={index} className={style.imageContainer}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </Slider>
          <p className={style.description}>{description}</p>
        </div>

        <div className={style.sectionsButtons}>
          <button
            className={clsx(style.sectionBtn, {
              active: activeSection === "features",
            })}
            onClick={() => setActiveSection("features")}
          >
            Features
          </button>
          <button
            className={clsx(style.sectionBtn, {
              active: activeSection === "reviews",
            })}
            onClick={() => setActiveSection("reviews")}
          >
            Reviews
          </button>
        </div>

        {activeSection && (
          <div className={style.modalSection}>
            {activeSection === "features" && (
              <div>
                <DetailsComponent details={details} />
                <div>
                  <h3 className={style.detailsTitle}>Vehicle details</h3>
                  <ul className={style.detailsList}>
                    <li className={style.detailsItem}>
                      <div className={style.detailContainer}>
                        <p>Form </p>
                        <p>{bodyType}</p>
                      </div>
                    </li>
                    <li className={style.detailsItem}>
                      <div className={style.detailContainer}>
                        <p>Length</p>
                        <p>{length}</p>
                      </div>
                    </li>
                    <li className={style.detailsItem}>
                      <div className={style.detailContainer}>
                        <p>Width</p>
                        <p>{width}</p>
                      </div>
                    </li>
                    <li className={style.detailsItem}>
                      <div className={style.detailContainer}>
                        <p>Height</p>
                        <p>{height}</p>
                      </div>
                    </li>
                    <li className={style.detailsItem}>
                      <div className={style.detailContainer}>
                        <p>Tank</p>
                        <p>{tank}</p>
                      </div>
                    </li>
                    <li className={style.detailsItem}>
                      <div className={style.detailContainer}>
                        <p>Consumption</p>
                        <p>{consumption}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeSection === "reviews" && (
              <div>
                <ul className={style.reviewsList}>
                  {reviews.map((review, index) => (
                    <li key={index}>
                      <div className={style.reviewerInfo}>
                        <span className={style.reviewerImg}>
                          <IoPersonSharp color="#f2f4f7" />
                        </span>
                        <p>
                          <strong>{review.reviewer_name}</strong>
                        </p>
                      </div>
                      {renderRatingStars(review.reviewer_rating)}
                      <p>{review.comment}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={style.bookingFormContainer}>
              <h3>Book your camper now</h3>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  bookingDate: "",
                  comment: "",
                }}
                validationSchema={validationSchema}
                onSubmit={notify}
              >
                {({ isSubmitting }) => (
                  <Form className={style.bookingForm}>
                    <div className={style.inputContainer}>
                      <label htmlFor="name"></label>
                      <Field
                        className={style.bookingFormInput}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className={style.error}
                      />
                    </div>

                    <div className={style.inputContainer}>
                      <label htmlFor="email"></label>
                      <Field
                        className={style.bookingFormInput}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={style.error}
                      />
                    </div>

                    <div className={style.inputContainer}>
                      <label htmlFor="bookingDate"></label>
                      <Field
                        className={style.bookingFormInput}
                        type="date"
                        id="bookingDate"
                        name="bookingDate"
                        placeholder="Booking date"
                      />
                      <ErrorMessage
                        name="bookingDate"
                        component="div"
                        className={style.error}
                      />
                    </div>

                    <div className={style.inputContainer}>
                      <label htmlFor="comment"></label>
                      <Field
                        as="textarea"
                        className={style.bookingFormComment}
                        id="comment"
                        name="comment"
                        placeholder="Comment"
                      />
                      <ErrorMessage
                        name="comment"
                        component="div"
                        className={style.error}
                      />
                    </div>

                    <button
                      className={style.bookingFormBtn}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Send
                    </button>
                    <Toaster/>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
