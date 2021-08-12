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
              <h2 className="text-2xl pb-3 font-medium text-blue-500">Free</h2>
              <p className="text-lg">
                For individuals and teams looking to be more productive.
              </p>
            </div>

            <div className="text-2xl py-4 lg:py-12 text-center">
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
                <span className="block text-sm">Limited access</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-sm">Limited members</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-sm">Up to 3 course assign</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-sm">1 Power-Up per board</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-sm">
                  Three file storage (10MB/file)
                </span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-sm">
                  Three meeting set per month
                </span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-sm">Limited activity log</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-sm">Assignee and due dates</span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-sm">
                  All device responsive view
                </span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  className="text-green-500 block mr-3"
                  icon={faCheck}
                />
                <span className="block text-sm">JWT token authentication</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t lg:border-t-0 border-b lg:border-b-0 lg:border-l bg-blue-100 lg:border-r border-gray-400">
          <div className="p-8 text-center">
            <div className="pb-6">
              <h2 className="text-2xl pb-3 font-medium text-blue-500">
                Premium
              </h2>
              <p className="text-lg">
                For teams that need to track multiple projects and visualize
                work in a variety of ways. Best for teams up to 100.
              </p>
            </div>

            <div className="">
              <div className="text-2xl p-12 pb-2">
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
            <h4 className="text-lg font-semibold pb-3">
              Everything in one package:
            </h4>

            <ul>
              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Unlimited Members</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">
                  Unlimited Meeting Schedule
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">
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
                <span className="block text-sm">
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
                <span className="block text-sm">
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
                <span className="block text-sm">
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
                <span className="block text-sm">Shared Creative Ideas</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Assign unlimited course</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Employees Work progress</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">
                  Unlimited storage (250MB/file)
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">
                  Admin and security features
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Maintenance Services</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">
                  Collections of team leaders
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Observe your employees</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Leave application</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">
                  Custom backgrounds & stickers
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Saved searches</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Priority support</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Internal messaging</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Making teams</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="p-8 text-center pb-8">
            <div className="pb-5">
              <h1 className="text-2xl pb-3 font-medium text-blue-500">
                Custom
              </h1>
              <h4 className="text-lg">
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
                // value="25"
                min="25"
                max="5000"
              />
            </div>

            <div className="">
              <div className="text-2xl py-9 pb-2">
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
            <h4 className="text-lg font-semibold pb-3">
              Everything in Business Class, plus:
            </h4>

            <ul>
              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">
                  Organization wide permissions
                </span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Unlimited Department</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">App Manage training</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Multi-board guests</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Attachment permissions</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">Power-Up administration</span>
              </li>

              <li className="flex items-center pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="block text-green-500 mr-3"
                />
                <span className="block text-sm">
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
