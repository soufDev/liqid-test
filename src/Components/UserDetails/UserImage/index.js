import React from "react";
import { UserImageContainer } from "./UserImageContainer";
import { WrapperCommon } from "../../WrapperCommon";
import { ErrorMessage } from "../../ErrorMessage";
import { UserImage } from "./UserImage";
import { ErrorBoundary } from "../../ErrorBoundary";

export default () => (
  <React.Suspense fallback={<h4>Loading the user image...</h4>}>
    <ErrorBoundary>
      <UserImageContainer>
        {({ image, imageError }) => (
          <>
            <WrapperCommon isVisible={imageError}>
              <ErrorMessage error={imageError} />
            </WrapperCommon>
            <WrapperCommon isVisible={!imageError}>
              <UserImage url={image.url} title={image.title} />
            </WrapperCommon>
          </>
        )}
      </UserImageContainer>
    </ErrorBoundary>
  </React.Suspense>
);
