import { MessageActionTypes, SEND_MESSAGE, REMOVE_MESSAGE_FROM_INBOX, ADD_NEW_MESSAGE, ADD_RECIPIENT_TO_MESSAGE, MESSAGE_CONTENT_CHANGE } from "./types";

export function sendMessage( messageId: number ): MessageActionTypes {
  return {
    type: SEND_MESSAGE, 
    messageId: messageId,
  }
}

export function removeMessageFromInbox( messageId: number, recipientUserId: number ): MessageActionTypes {
  return {
    type: REMOVE_MESSAGE_FROM_INBOX,
    messageId: messageId,
    recipientUserId: recipientUserId
  }
}

export function addNewMessage( fromUserId: number, recipientUserId: number ): MessageActionTypes {
  return {
    type: ADD_NEW_MESSAGE,
    fromUserId: fromUserId,
    recipientUserId: recipientUserId 
  }
}

export function addRecipientToMessage( messageId: number, recipientUserId: number): MessageActionTypes {
  return {
    type: ADD_RECIPIENT_TO_MESSAGE,
    messageId: messageId,
    recipientUserId: recipientUserId
  }
}

export function messageContentChange( messageId: number, messageContent: string): MessageActionTypes {
  return {
    type: MESSAGE_CONTENT_CHANGE,
    messageId: messageId,
    messsageContent: messageContent
  }
}
