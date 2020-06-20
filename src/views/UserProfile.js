import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import SettingsCard from "../components/Settings/SettingsCard";

const UserProfile = () => {
  const [settings, setSettings] = React.useState({});
  const [pending, setPending] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_API_BASE_URL + "/settings",
        {
          withCredentials: true,
        }
      );

      setSettings(data);
      setPending(false);
    })();
  }, []);

  if (pending)
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader
          type="Watch"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );

  return (
    <>
      <div className="content">
        <SettingsCard {...settings.user} isAdmin={true} />
        {settings.orgas.map((orga) => (
          <SettingsCard {...orga} />
        ))}
      </div>
    </>
  );
};

export default UserProfile;
