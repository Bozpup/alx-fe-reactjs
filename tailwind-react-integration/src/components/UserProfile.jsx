function UserProfile() {
  return (
    <div className="user-profile hover:shadow-xl  sm:p-4 md:p-8 bg-gray-100  md:max-w-sm max-w-s max-w-xs mx-auto my-20 rounded-lg shadow-lg">
      <img
        className=" hover:scale-110 transition-transform duration-300 ease-in-out rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className=" hover:text-blue-500 sm: text-lg md:text-xl text-blue-800 my-4">
        John Doe
      </h1>
      <p className="sm:text-sm md:text-base text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
