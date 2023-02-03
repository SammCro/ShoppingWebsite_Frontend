import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media.licdn.com/dms/image/C4D03AQEyqfkLW3q73A/profile-displayphoto-shrink_800_800/0/1611399758357?e=2147483647&v=beta&t=19jktWlg4GGELovns1iaWk0Ffqk_tnEEaQerfH9fDps"
        />
        <Dropdown pointing="top right" text="İlkay">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
