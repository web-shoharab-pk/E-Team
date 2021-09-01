import React, { useState } from "react";
import firebase from 'firebase';
import { useParams } from "react-router";
import db from "../../Firebase/Firebase";

const AddQuiz = () => {
  const [quizData, setQuizData] = useState({});
  const [showField, setShowField] = useState(true);
  const {id}:any = useParams();

  const handleOnChange = (e: any) => {
    setQuizData({ ...quizData, [e.target.name]: e.target.value, module_id:id });
  };
  console.log(quizData);
  const handleSubmit = (e: any) => {
    console.log(quizData);

    db.collection("course_quizzes")
      .add({...quizData,created_at: firebase.firestore.FieldValue.serverTimestamp()})
      .then((data: any) => {
        window.history.go(-1)
      })
      .catch((error: any) => {
        console.log(error);
      });

    setShowField(true);
    e.preventDefault();
  };

  const handleShowField = () => {
    setShowField((showField) => !showField);
  };

  return (
    <div className="mt-6 p-5">
      {showField ? (
        <input
          onClick={handleShowField}
          value="Add Quiz"
          className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
        />
      ) : (
        <div className="shadow rounded hover:shadow-lg">
          <form action="" onSubmit={handleSubmit} className="form mt-4 p-5">
          <div className="lg:flex w-full mb-5 lg:space-x-16">
            <div className="w-full">
              <label className="text-base lg:font-semibold" htmlFor="">
                Question
              </label>
              <br />
              <input
                className="app-input"
                onKeyUp={handleOnChange}
                id="title"
                type="text"
                required
                name="quiz_question"
                placeholder=" Quiz Question"
              />

            </div>
          </div>

          <div className="lg:flex w-full mb-5 lg:space-x-16">
            <div className="lg:w-5/6">
              <label className="text-base lg:font-semibold" htmlFor="">
                Option 1
              </label>
              <br />
              <input
                className="app-input"
                onKeyUp={handleOnChange}
                name="option1"
                type="text"
                required
                placeholder="Quiz Option"
              />
            </div>
            <div className="lg:w-5/6">
              <label className="text-base lg:font-semibold" htmlFor="">
                Option 2
              </label>
              <br />
              <input
                className="app-input"
                onKeyUp={handleOnChange}
                name="option2"
                type="text"
                required
                placeholder="Quiz Option"
              />
            </div>
          </div>
          <div className="lg:flex w-full mb-5 lg:space-x-16">
            <div className="lg:w-5/6">
              <label className="text-base lg:font-semibold" htmlFor="">
                Option 3
              </label>
              <br />
              <input
                className="app-input"
                onKeyUp={handleOnChange}
                name="option3"
                type="text"
                required
                placeholder="Quiz Option"
              />
            </div>
            <div className="lg:w-5/6">
              <label className="text-base lg:font-semibold" htmlFor="">
                Option 4
              </label>
              <br />
              <input
                className="app-input"
                onKeyUp={handleOnChange}
                name="option4"
                type="text"
                required
                placeholder="Quiz Option"
              />
            </div>
          </div>
          <div className="lg:flex w-1/2 mb-5 lg:space-x-16">
            <div className="w-5/6">
              <label className="text-base lg:font-semibold" htmlFor="">
                Rignt Answer
              </label>
              <br />

              <select
                onChange={handleOnChange}
                className="app-input" name="right_answer" id="">
                <option value="">Select One</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
          </div>

          <div className="text-center ">
            <input
              type="submit"
              value="Add Quiz"
              className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
            />
          </div>
        </form>
        </div>
      )}
    </div>
  );
};

export default AddQuiz;
