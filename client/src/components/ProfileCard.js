import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function PersonalProfile(props) {
  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
      <MDBContainer className="py-5 h-100 bg-dark">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="12" className="mb-4 mb-lg-0">
            <MDBCard
              className="mb-3 gradient-custom text-bg-dark"
              style={{ borderRadius: ".5rem" }}
            >
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src={process.env.PUBLIC_URL + props.imgURL}
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "100px", borderRadius: "50%" }}
                    fluid
                  />
                  <MDBTypography tag="h5">{props.name}</MDBTypography>
                  <MDBCardText>{props.title}</MDBCardText>
                </MDBCol>
                <MDBCol md="8" className="">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="12" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          {props.mail}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="12" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">
                          {props.phone}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <hr className="mt-4 mb-2 col-4 mx-auto" />
                <MDBTypography tag="h5" className="text-center">
                  Education
                </MDBTypography>
                <hr className="mt-0 mb-4 col-4 mx-auto" />
                <MDBRow className="pt-1 m-2 text-center text-light">
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">{props.university}</MDBTypography>
                    <MDBCardText className="text-muted">
                      {props.programme}
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">{props.school}</MDBTypography>
                    <MDBCardText className="text-muted">
                      {props.board}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4 justify-content-center mx-0">
                  <div className="d-flex justify-content-center">
                    <a href={props.instagramLink} target="blank">
                      <MDBIcon fab icon="instagram me-3" size="lg" />
                    </a>
                    <a href={props.gitHubLink} target="blank">
                      <MDBIcon
                        fab
                        icon="github me-3"
                        size="lg"
                        className="text-dark"
                      />
                    </a>
                    <a href={props.linkedinLink} target="blank">
                      <MDBIcon fab icon="linkedin me-3" size="lg" />
                    </a>
                  </div>
                </MDBRow>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
