import React from 'react';

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
                {/* Header Section */}
                <div className="relative flex flex-col items-center">
                    {/* Cover Photo */}
                    <div className="w-full h-40 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-t-lg"></div>
                    
                    {/* Profile Photo */}
                    <div className="-mt-20">
                        <img
                            className="w-36 h-36 rounded-full border-4 border-white shadow-md"
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                            alt="Profile"
                        />
                    </div>
                    
                    {/* User Information */}
                    <div className="text-center mt-4">
                        <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
                        <p className="text-gray-600">@john_doe</p>
                        <p className="text-gray-500 mt-2">Full Stack Developer | Tech Enthusiast | Blogger</p>
                    </div>
                </div>

                {/* User Stats Section */}
                <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                    {/* Followers */}
                    <div className="bg-gray-200 rounded-lg p-4">
                        <h3 className="text-xl font-semibold text-gray-800">1,245</h3>
                        <p className="text-gray-600">Followers</p>
                    </div>
                    {/* Following */}
                    <div className="bg-gray-200 rounded-lg p-4">
                        <h3 className="text-xl font-semibold text-gray-800">732</h3>
                        <p className="text-gray-600">Following</p>
                    </div>
                    {/* Posts */}
                    <div className="bg-gray-200 rounded-lg p-4">
                        <h3 className="text-xl font-semibold text-gray-800">85</h3>
                        <p className="text-gray-600">Posts</p>
                    </div>
                </div>

                {/* About Me Section */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Passionate about web development and creating impactful digital experiences. Skilled in React, JavaScript, and modern web technologies. When I’m not coding, you’ll find me exploring new tech, writing blogs, or enjoying coffee at my favorite local cafe.
                    </p>
                </section>

                {/* Recent Activities Section */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activities</h2>
                    <div className="space-y-4">
                        {/* Activity 1 */}
                        <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition duration-200">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="https://randomuser.me/api/portraits/lego/1.jpg"
                                    alt="Activity 1"
                                />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-800">Posted a New Blog</h3>
                                <p className="text-gray-600 text-sm">"10 Tips to Boost Your JavaScript Skills"</p>
                            </div>
                        </div>
                        {/* Activity 2 */}
                        <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition duration-200">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="https://randomuser.me/api/portraits/lego/2.jpg"
                                    alt="Activity 2"
                                />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-800">Attended a Webinar</h3>
                                <p className="text-gray-600 text-sm">"The Future of Frontend Development"</p>
                            </div>
                        </div>
                        {/* Activity 3 */}
                        <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition duration-200">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="https://randomuser.me/api/portraits/lego/3.jpg"
                                    alt="Activity 3"
                                />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-800">Started a New Project</h3>
                                <p className="text-gray-600 text-sm">"Building a Portfolio Website with Tailwind CSS"</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Profile;
