# Rick and morty

This is an implementation of a test assignment from fuse 8.

## Task Description

You need to implement a search functionality for characters by name and display the results on the page using the
provided API. When the user first visits the page, they will only see the search field where they can enter a query.

---

- **Design**: [Figma](https://www.figma.com/design/OqXrvb70uW6plWJYGW4cvI/Rick-nad-Morti-test?node-id=101-2&p=f&t=zrmVhbhxKpJKZ5IE-0)
- **API**: [API Documentation](https://rickandmortyapi.com/documentation/#rest)

---

## Technical Requirements

1. **Responsive Layout**:
    - Support screen resolutions from 320px to 1920px.
    - Pixel perfect is not required.

2. **Browser Support**:
    - Latest version of Google Chrome.

3. **React Usage**:
    - The application must be built using React.

---

## Functional Requirements

1. **Automatic Focus on the Search Field**:
    - Upon page load, the cursor should automatically be placed in the search field for user convenience.

2. **Sending Requests on Input**:
    - A request to the API is sent only after the user enters **more than three characters**.
    - The search should be performed based on the `name` parameter (e.g., "Rick").

3. **Result Display**:
    - Each found character is displayed as a card.
    - Each card must include a link that directs to the URL specified in the `URL` field of the element.

4. **Code and publication**:
   The completed code must be hosted on GitHub with both the repository and a live site deployed via GitHub Pages.
    - Provide two links: one to the repository and another to the working website.