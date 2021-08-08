import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const PricingArea = () => {
  return (
    <div className="container mx-auto px-3 lg:px-16 my-6 lg:my-12">
      <div className="lg:grid lg:grid-cols-3 lg:border-t border-b border-gray-400">
        <div className="">
          <div className="px-3 py-6 lg:p-8 text-center pb-8">
            <div className="pb-8 lg:pb-20">
              <h2 className="text-5xl pb-3 font-medium text-blue-500">Free</h2>
              <p className="text-xl">
                For individuals and teams looking to be more productive.
              </p>
            </div>

            <div className="text-5xl py-4 lg:py-12">
              <span className="text-base">$</span>0
              <span className="text-base">USD</span>
            </div>

            <div className="pt-12">
              <Link
                to=""
                className="border text-md lg:text-lg border-blue-500 bg-none text-blue-500 font-semibold py-2 px-6 lg:px-9 rounded-md"
              >
                <span>Get started</span>
              </Link>
            </div>
          </div>

          <div className="p-8 border-t border-gray-400 mb-4">
            <ul>
              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-lg">Limited access</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-lg">Limited members</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-lg">Up to 3 course assign</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-lg">1 Power-Up per board</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-lg">
                  Three file storage (10MB/file)
                </span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-lg">
                  Three meeting set per month
                </span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-lg">Limited activity log</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-lg">Assignee and due dates</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-lg">
                  All device responsive view
                </span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-lg">JWT token authentication</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t lg:border-t-0 border-b lg:border-b-0 lg:border-l bg-blue-100 lg:border-r border-gray-400">
          <div className="p-8 text-center">
            <div className="pb-6">
              <h2 className="text-5xl pb-3 font-medium text-blue-500">
                Premium
              </h2>
              <p className="text-xl">
                For teams that need to track multiple projects and visualize
                work in a variety of ways. Best for teams up to 100.
              </p>
            </div>

            <div className="">
              <div className="text-5xl p-12 pb-2">
                <span className="text-base">$</span>
                50
                <span className="text-base">USD</span>
              </div>

              <p className="text-base text-gray-400">
                per company per month billed annually ($600.00 billed monthly)
              </p>
            </div>

            <div className="pt-10">
              <Link
                to=""
                className="border text-md lg:text-lg border-blue-500 bg-none text-blue-500 font-semibold py-2 px-6 lg:px-9 rounded-md"
              >
                <span>Don't be late</span>
              </Link>
            </div>
          </div>

          <div className="p-8 border-t border-gray-400 mb-4">
            <h4 className="text-xl font-semibold pb-3">
              Everything in one package:
            </h4>

            <ul>
              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Unlimited Members</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">
                  Unlimited Meeting Schedule
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">
                  Company Admin view
                  <span className="bg-blue-800 px-2 py-1 text-sm text-white rounded-md ml-3">
                    New
                  </span>
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">
                  Classified Employees Accounts
                  <span className="bg-blue-800 px-2 py-1 text-sm text-white rounded-md ml-3">
                    New
                  </span>
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">
                  Workspace Table view
                  <span className="bg-blue-800 px-2 py-1 text-sm text-white rounded-md ml-3">
                    BETA
                  </span>
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">
                  Scheduled Meeting view
                  <span className="bg-blue-800 px-2 py-1 text-sm text-white rounded-md ml-3">
                    New
                  </span>
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Shared Creative Ideas</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Assign unlimited course</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Employees Work progress</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">
                  Unlimited storage (250MB/file)
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">
                  Admin and security features
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Maintenance Services</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">
                  Collections of team leaders
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Observe your employees</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Leave application</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">
                  Custom backgrounds & stickers
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Saved searches</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Priority support</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Internal messaging</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Making teams</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="p-8 text-center pb-8">
            <div className="pb-5">
              <h1 className="text-5xl pb-3 font-medium text-blue-500">
                Custom
              </h1>
              <h4 className="text-xl">
                For companies that need enhanced control, security, and support.
              </h4>
            </div>

            <div>
              <div className="text-lg">
                Est. cost for
                <input
                  className="mx-2 text-center border-b border-gray-500"
                  type="number"
                  value="25"
                  min="25"
                  max="5000"
                />
                users
              </div>

              <input
                className="w-full bg-gray-200 appearance-none mt-7 h-2 rounded-lg"
                type="range"
                step="1"
                value="25"
                min="25"
                max="5000"
              />
            </div>

            <div className="">
              <div className="text-5xl py-9 pb-2">
                <span className="text-base">$</span>
                100
                <span className="text-base">USD</span>
              </div>

              <p className="text-base text-gray-400">
                per company per month billed annually ($1200.00 annual price per
                company)
              </p>
            </div>

            <div className="pt-10">
              <Link
                to=""
                className="border text-md lg:text-lg border-blue-500 bg-none text-blue-500 font-semibold py-2 px-6 lg:px-9 rounded-md"
              >
                <span>Don't be late</span>
              </Link>
            </div>
          </div>

          <div className="p-8 border-t my-px border-gray-400 mb-4">
            <h4 className="text-xl font-semibold pb-3">
              Everything in Business Class, plus:
            </h4>

            <ul>
              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">
                  Organization wide permissions
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Unlimited Department</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">App Manage training</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Multi-board guests</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Attachment permissions</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">Power-Up administration</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-lg">
                  Unlimited automated command runs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingArea;
