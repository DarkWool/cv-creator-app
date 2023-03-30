import SplineSansMedium from "../fonts/SplineSans-Medium.ttf";
import SplineSansSemiBold from "../fonts/SplineSans-SemiBold.ttf";
import SplineSansRegular from "../fonts/SplineSans-Regular.ttf";
import SplineSansBold from "../fonts/SplineSans-Bold.ttf";
import { PDFViewer } from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Svg,
  Path,
  Image,
  Link,
} from "@react-pdf/renderer";

Font.register({
  family: "SplineSans",
  fonts: [
    { src: SplineSansRegular },
    { src: SplineSansMedium, fontWeight: 500 },
    { src: SplineSansSemiBold, fontWeight: 600 },
    { src: SplineSansBold, fontStyle: "bold" },
  ],
});

const styles = StyleSheet.create({
  body: {
    fontFamily: "SplineSans",
    flexDirection: "row",
    fontSize: 10,
    lineHeight: 1.25,
  },
  mainColumn: {
    padding: 25,
  },
  sidebar: {
    width: "30%",
    backgroundColor: "black",
    color: "white",
  },
  image: {
    maxWidth: "100%",
    width: 90,
    height: 90,
    objectFit: "cover",
    borderRadius: "100%",
  },
  sidebarSection: {
    marginBottom: 40,
  },
  sidebarTitleContainer: {
    borderBottom: "1px solid hsl(0, 0%, 20%)",
    paddingBottom: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: 700,
  },
  list: {
    marginTop: 12,
  },
  mainContent: {
    width: "100%",
  },
  name: {
    fontSize: 24,
    fontStyle: "bold",
    lineHeight: 1,
  },
  profession: {
    fontWeight: 500,
    letterSpacing: 2,
    fontSize: 11,
    color: "hsla(266, 100%, 50%, 1)",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
    display: "block",
  },
  mainSection: {
    marginBottom: 55,
  },
  personalList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  personalListItem: {
    width: "50%",
  },
  experienceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 9,
    marginBottom: 9,
  },
  titleContainer: {
    borderBottom: "1px solid hsl(0, 0%, 90%)",
    paddingBottom: 4,
    marginBottom: 10,
  },
  mainEntry: {
    marginTop: 22,
  },
  fsize11: {
    fontSize: 11,
  },
  fw500: {
    fontWeight: 500,
  },
  fw600: {
    fontWeight: 600,
  },
  accentColor: {
    color: "hsla(266, 100%, 50%, 1)",
  },
  mTop5: {
    marginTop: 5,
  },
  listItem: {
    marginTop: 4,
  },
  textDecoNone: {
    textDecoration: "none",
  },
});

export const CVPdf = ({
  profilePicture,
  personalData,
  educationData,
  workData,
  skills,
  languages,
  interests,
}) => {
  return (
    <Document>
      <Page style={styles.body} size="LEGAL">
        <View style={[styles.sidebar, styles.mainColumn]}>
          {/* Profile picture */}
          <View style={styles.sidebarSection}>
            {profilePicture && <Image src={profilePicture} style={styles.image} />}
          </View>

          {/* Skills */}
          <View style={styles.sidebarSection}>
            <View style={styles.sidebarTitleContainer}>
              <Text style={styles.title}>SKILLS</Text>
            </View>
            <View style={styles.list}>
              {skills.map((skill) => (
                <Text style={styles.listItem}>- {skill.name}</Text>
              ))}
            </View>
          </View>

          {/* Languages */}
          <View style={styles.sidebarSection}>
            <View style={styles.sidebarTitleContainer}>
              <Text style={styles.title}>LANGUAGES</Text>
            </View>
            <View style={styles.list}>
              {languages.map((lang) => {
                return (
                  <View style={styles.listItem}>
                    <Text>- {lang.name}</Text>
                    <Text style={[styles.fw600, { color: "hsl(265.9, 100%, 71.4%)" }]}>
                      {lang.proficiency}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          {/* Interests */}
          <View style={styles.sidebarSection}>
            <View style={styles.sidebarTitleContainer}>
              <Text style={styles.title}>INTERESTS</Text>
            </View>
            <View style={styles.list}>
              {interests.map((int) => (
                <Text style={styles.listItem}>- {int.name}</Text>
              ))}
            </View>
          </View>
        </View>

        <View style={[styles.mainContent, styles.mainColumn]}>
          {/* General information */}
          <View style={styles.mainSection}>
            <Text style={styles.name}>
              {personalData.firstName} {personalData.lastName}
            </Text>

            <Text style={[styles.profession, { marginTop: 5 }]}>{personalData.profession}</Text>

            <View style={[styles.iconContainer, { marginTop: 15, marginBottom: 15 }]}>
              <Svg width="16" height="16" viewBox="0 0 24 24" style={styles.icon}>
                <Path
                  d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                  fill="rgb(0, 0, 0)"
                />
              </Svg>
              <Text>{personalData.address}</Text>
            </View>

            <Text>{personalData.aboutMe}</Text>

            {/* Contact information */}
            <View style={[styles.personalList, { marginTop: 15 }]}>
              <View style={[styles.iconContainer, styles.personalListItem]}>
                <Svg width="16" height="16" viewBox="0 0 24 24" style={styles.icon}>
                  <Path
                    d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                    fill="rgb(0, 0, 0)"
                  />
                </Svg>
                <Link
                  src={`mailto:${personalData.email}`}
                  style={[styles.textDecoNone, styles.accentColor]}
                >
                  {personalData.email}
                </Link>
              </View>

              <View style={[styles.iconContainer, styles.personalListItem]}>
                <Svg width="16" height="16" viewBox="0 0 24 24" style={styles.icon}>
                  <Path
                    d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                    fill="rgb(0, 0, 0)"
                  />
                </Svg>
                <Link
                  src={`https://www.linkedin.com/in/${personalData.linkedIn}`}
                  style={[styles.textDecoNone, styles.accentColor]}
                >
                  {personalData.linkedIn}
                </Link>
              </View>

              <View style={[styles.iconContainer, styles.personalListItem, styles.listItem]}>
                <Svg width="16" height="16" viewBox="0 0 24 24" style={styles.icon}>
                  <Path
                    d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                    fill="rgb(0, 0, 0)"
                  />
                </Svg>
                <Text>{personalData.phoneNumber}</Text>
              </View>

              <View style={[styles.iconContainer, styles.personalListItem, styles.listItem]}>
                <Svg width="16" height="16" viewBox="0 0 24 24" style={styles.icon}>
                  <Path
                    d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"
                    fill="rgb(0, 0, 0)"
                  />
                </Svg>
                <Link
                  src={`${personalData.portfolio}`}
                  style={[styles.textDecoNone, styles.accentColor]}
                >
                  {personalData.portfolio}
                </Link>
              </View>
            </View>
          </View>

          {/* Work Experience section */}
          <View style={styles.mainSection}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Work Experience</Text>
            </View>

            {workData.map((exp, index) => (
              <View style={index !== 0 ? styles.mainEntry : null}>
                <View style={styles.fsize11}>
                  <Text style={styles.fw600}>{exp.position}</Text>
                  <Text>{exp.company}</Text>
                </View>

                <View style={[styles.experienceDetails, styles.accentColor]}>
                  <Text style={styles.fw500}>
                    {exp.from} - {exp.to}
                  </Text>
                  <Text>{exp.location}</Text>
                </View>

                <View>
                  <Text style={styles.fw500}>Achievements / Tasks:</Text>
                  <Text style={styles.mTop5}>{exp.details}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Education section */}
          <View style={styles.mainSection}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Education</Text>
            </View>

            {educationData.map((educ, index) => (
              <View style={index !== 0 ? styles.mainEntry : null}>
                <View style={styles.fsize11}>
                  <Text style={styles.fw600}>{educ.degree}</Text>
                  <Text style={{ marginTop: 2, marginBottom: 6 }}>{educ.school}</Text>
                </View>
                <View>
                  <Text
                    style={[styles.fw500, styles.accentColor]}
                  >{`${educ.from} - ${educ.to}`}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
