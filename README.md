# Strapi Pusher Notification Plugin

## Introduction

The Strapi Pusher Notification Plugin enables sending real-time notifications to users using Pusher within a Strapi application. By leveraging Pusher's Channels, this plugin facilitates the integration of instant notification features, enhancing user interaction with real-time updates.

## Table of Contents

- [Installation](#installation)
  - [Install the Plugin](#1-install-the-plugin)
  - [Install Required Dependencies](#2-install-required-dependencies)
  - [Set Up Environment Variables](#3-set-up-environment-variables)
- [Plugin Structure](#plugin-structure)
- [Creating a Pusher Notification Channel](#creating-a-pusher-notification-channel)
- [Usage](#usage)
  - [Sending Notifications](#sending-notifications)
- [Endpoints](#endpoints)
- [Example Code](#example-code)
  - [Sending a Notification](#sending-a-notification)
  - [Triggering a Pusher Event](#triggering-a-pusher-event)
- [Additional Information](#additional-information)
- [Flow Diagram](#flow-diagram)
- [Video Demonstrations](#video-demonstrations)
- [Conclusion](#conclusion)

## Installation

### 1. **Install the Plugin**

To install the plugin into your Strapi project, run the following command:

```bash
npm install strapi-pusher-notification
```

### 2. **Install Required Dependencies**

Ensure that you have the required dependencies installed:

```bash
npm install axios
```

### 3. **Set Up Environment Variables**

Create a `.env` file in the root of your Strapi project and add the following Pusher configuration:

```env
PUSHER_APP_ID=1857831
PUSHER_KEY=2c0bbaaa989d9097ec24
PUSHER_SECRET=57a0d12c3112c5cb4916
PUSHER_CLUSTER=us2
```

Replace the placeholder values with your actual Pusher credentials. These variables are essential for authenticating and connecting to your Pusher Channels.

## Plugin Structure

- `pusher-notification/admin/src/pages/homepage/index.js`: Frontend component for sending notifications from the Strapi admin panel.
- `pusher-notification/server/controllers/pusher-notification.js`: Handles the logic for sending notifications via Pusher.
- `pusher-notification/server/routes/index.js`: Defines API routes for triggering notifications.

## Creating a Pusher Notification Channel

Before sending notifications, you need to create a Pusher notification channel:

1. Sign up for a Pusher account and create a new Channels app via the [Pusher Channels Dashboard](https://dashboard.pusher.com/).
2. Copy the App ID, Key, Secret, and Cluster from your Channels app and paste them into your `.env` file.
3. Configure your Channels app in the Pusher dashboard as needed, including setting up event triggers and channels.

## Usage

### Sending Notifications

With the plugin installed and your Pusher credentials set up, you can now send notifications:

1. **Enter Your Notification Details:**
   - **Title:** The main content of your notification.
   - **Subtitle:** Additional information or context.
   - **Channel Name:** The name of the Pusher channel to which you want to send the notification.
   - **Event Name:** The event name that triggers the notification on the specified channel.
2. **Click "Send Notification":** After entering the details, click the "Send Notification" button. The plugin will send the notification via Pusher to all connected users subscribed to the specified channel and event.

## Endpoints

- `POST /pusher-notification/send`: API endpoint to send a notification. This will trigger a Pusher event with the provided title, subtitle, channel, and event name.

## Example Code

### Sending a Notification

```javascript
const sendNotification = async (title, subtitle, channel, event) => {
  try {
    await axios.post('/pusher-notification/send', {
      title,
      subtitle,
      channel,
      event,
    });
    console.log('Notification sent successfully!');
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
```

### Triggering a Pusher Event

```javascript
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

pusher.trigger(channel, event, {
  title: title,
  subtitle: subtitle,
});
```

## Additional Information

For more details on setting up Pusher and configuring your channels, refer to the official [Pusher Channels Documentation](https://pusher.com/docs/channels).

## Flow Diagram

Here is a visual representation of how notifications are sent using this plugin:

![Pusher Flowchart](https://github.com/Dhanushkollipara/learning-dhanush/blob/feature/serviceplatform/Pusher%20flow%20chart.png)

## Video Demonstrations

- **Pusher Integration with React Frontend**
![pusher react frontend](https://github.com/Dhanushkollipara/learning-dhanush/blob/feature/serviceplatform/FrontEnd%20Recording.gif)
  - *Filename:* `pusher_react_frontend.mp4`
  - *Description:* Demonstrates how to integrate Pusher with a React frontend for real-time notifications.

- **Strapi Admin Panel Integration**
![strapi admin panel](https://github.com/Dhanushkollipara/learning-dhanush/blob/feature/serviceplatform/Backend%20Recording.gif)
  - *Filename:* `pusher_strapi_admin_panel.mp4`
  - *Description:* Shows how to use the plugin in the Strapi admin panel to send notifications.

## Conclusion

This plugin simplifies the process of sending real-time notifications in Strapi using Pusher. With just a few steps, you can integrate powerful notification features into your application. Happy coding!
