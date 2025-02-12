import { useUserContext } from '../hooks/ContextHooks';

const Profile = () => {
  const { user } = useUserContext();

  return (
    <>
      <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>
        {user && (
          <>
            <p className="text-lg font-semibold text-gray-700">
              {user.username} <span className="text-gray-500">({user.email})</span>
            </p>
            <p className="text-gray-600 mt-2">User level: <span className="font-medium text-gray-800">{user.level_name}</span></p>
            <p className="text-gray-600 mt-2">Registered: <span className="font-medium text-gray-800">{new Date(user.created_at).toLocaleString('fi-FI')}</span></p>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
