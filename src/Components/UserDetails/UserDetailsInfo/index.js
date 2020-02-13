import React from "react";
import { UserInfosContainer } from "./UserInfosContainer";
import { WrapperCommon } from "../../WrapperCommon";
import { ErrorMessage } from "../../ErrorMessage";
import { ErrorBoundary } from "../../ErrorBoundary";
import { UserDetailsInfo } from "./UserDetailsInfo";

export default () => (
  <React.Suspense fallback={<h4>Loading the user infos...</h4>}>
    <ErrorBoundary>
      <UserInfosContainer>
        {({ user, userError }) => (
          <>
            <WrapperCommon isVisible={userError}>
              <ErrorMessage error={userError} />
            </WrapperCommon>
            <WrapperCommon isVisible={!userError}>
              <ErrorBoundary>
                <UserDetailsInfo user={user} />
              </ErrorBoundary>
            </WrapperCommon>
          </>
        )}
      </UserInfosContainer>
    </ErrorBoundary>
  </React.Suspense>
);
