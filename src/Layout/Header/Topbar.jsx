import React from "react";
import { MapPinIcon, EnvelopeIcon, PhoneIcon, UserIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="bg-black text-white px-6 py-2 text-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left: Location, Email, Phone */}
                <div className="flex items-center gap-6">
                    {/* Location */}
                    <div className="flex items-center gap-2">
                        <div className="bg-white rounded-full p-2 flex items-center justify-center">
                            <MapPinIcon className="h-4 w-4 text-black" />
                        </div>
                        <span>123 Street, City</span>
                    </div>

                    <div className="border-l-2 border-white h-6"></div>

                    {/* Email */}
                    <div className="flex items-center gap-2">
                        <div className="bg-white rounded-full p-2 flex items-center justify-center">
                            <EnvelopeIcon className="h-4 w-4 text-black" />
                        </div>
                        <span>info@email.com</span>
                    </div>

                    <div className="border-l-2 border-white h-6"></div>

                    {/* Phone */}
                    <div className="flex items-center gap-2">
                        <div className="bg-white rounded-full p-2 flex items-center justify-center">
                            <PhoneIcon className="h-4 w-4 text-black" />
                        </div>
                        <span>+92 300 1234567</span>
                    </div>
                </div>

                {/* Right: Social Icons + Login/Register */}
                <div className="flex items-center gap-4">
                    {/* Social Icons */}
                    <FaFacebookF className="h-5 w-5 hover:text-gray-300" />
                    <FaTwitter className="h-5 w-5 hover:text-gray-300" />
                    <FaInstagram className="h-5 w-5 hover:text-gray-300" />

                    <div className="border-l-2 border-white h-6"></div>

                    {/* Login with Lock icon */}
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
                        <LockClosedIcon className="h-5 w-5 text-white" />
                        <span>Login</span>
                    </div>

                    {/* Register with User icon */}
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
                        <UserIcon className="h-5 w-5 text-white" />
                        <span>Register</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
