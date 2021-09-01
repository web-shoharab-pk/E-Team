import React, { useState } from "react";
import { useParams } from "react-router";
import db from "../../Firebase/Firebase";

const AddQuiz = () => {
  const [quizData, setQuizData] = useState({});
  const [showField, setShowField] = useState(true);
  const {id}:any = useParams();
  // const {id} = params; 
  let quizArray: any[] = []

  const handleOnChange = (e: any) => {
    setQuizData({ ...quizData, [e.target.name]: e.target.value, module_id: id  });
    // quizArray = [{...quizData}]
  }; 
  const handleSubmit = (e: any) => {
    quizArray.push(quizData)
console.log(quizArray);  
 
      db.collection("course_quizzes")
        .add(quizArray)
        .then((data: any) => {
          console.log(data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    
    // setShowField(true);
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
          type="submit"
          value="Add Quiz"
          className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
        />
      ) : (
        <form action="" onSubmit={handleSubmit} className="form mt-4 p-5">
          <div className="lg:flex w-full mb-5 lg:space-x-16">
            <div className="lg:w-5/6">
              <label className="text-base lg:font-semibold" htmlFor="">
                Quiz Question
              </label>
              <br />
              <input
                className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                onKeyUp={handleOnChange}
                id="title"
                type="text"
                required
                name="quiz_question"
                placeholder=" Quiz Question"
              />
             
            </div>
            <div className="lg:w-5/6">
              <label className="text-base lg:font-semibold" htmlFor="">
                Rignt Answer
              </label>
              <br />
            
               <select
               onChange={handleOnChange}
                className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="right_answer"  id="">
                <option value="">Select One</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
          </div>

          <div className="lg:flex w-full mb-5 lg:space-x-16">
            <div className="lg:w-5/6">
              <label className="text-base lg:font-semibold" htmlFor="">
                Option 1
              </label>
              <br />
              <input
                className="rounded  bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                className="rounded  bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                className="rounded  bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                className="rounded  bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                onKeyUp={handleOnChange}
                name="option4"
                type="text"
                required
                placeholder="Quiz Option"
              />
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
      )}
    </div>
  );
};

export default AddQuiz;
