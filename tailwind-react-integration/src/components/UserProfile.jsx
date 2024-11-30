function UserProfile() {
  return (
    <div className="user-profile sm:p-4 md:p-8 bg-gray-100  max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        className="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="sm: text-lg md: text-xl text-blue-800 my-4">John Doe</h1>
      <p className="sm:text-sm md:text-base text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
