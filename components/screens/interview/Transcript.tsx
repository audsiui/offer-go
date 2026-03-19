import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';
import { Avatar } from '../../common';

type Message = {
  id: string;
  sender: 'interviewer' | 'user';
  senderName: string;
  content: string;
};

type TranscriptProps = {
  messages: Message[];
};

export function Transcript({ messages }: TranscriptProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>实时转录</Text>
        <Text style={styles.status}>实时语音识别中...</Text>
      </View>
      <ScrollView
        style={styles.messagesContainer}
        contentContainerStyle={styles.messages}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageRow,
              message.sender === 'user' && styles.messageRowUser,
            ]}
          >
            {message.sender === 'interviewer' ? (
              <Avatar size="sm" backgroundColor={Colors.secondaryContainer} fallback="S" />
            ) : (
              <Avatar size="sm" backgroundColor={Colors.primary} fallback="你" />
            )}
            <View
              style={[
                styles.messageContent,
                message.sender === 'user' && styles.messageContentUser,
              ]}
            >
              <Text style={styles.senderName}>{message.senderName}</Text>
              <View
                style={[
                  styles.bubble,
                  message.sender === 'user' && styles.bubbleUser,
                ]}
              >
                <Text
                  style={[
                    styles.bubbleText,
                    message.sender === 'user' && styles.bubbleTextUser,
                  ]}
                >
                  {message.content}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  title: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  status: {
    fontSize: 10,
    color: Colors.outline,
  },
  messagesContainer: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: BorderRadius['3xl'],
    padding: Spacing.lg,
    maxHeight: 192,
  },
  messages: {
    gap: Spacing.lg,
  },
  messageRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  messageRowUser: {
    flexDirection: 'row-reverse',
  },
  messageContent: {
    flex: 1,
    gap: 4,
  },
  messageContentUser: {
    alignItems: 'flex-end',
  },
  senderName: {
    fontSize: 10,
    fontWeight: FontWeight.bold,
    color: Colors.outline,
  },
  bubble: {
    backgroundColor: Colors.surfaceContainerLowest,
    padding: Spacing.md,
    borderRadius: BorderRadius.xl,
    borderTopLeftRadius: 0,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: Colors.slate['100'],
  },
  bubbleUser: {
    backgroundColor: Colors.primary,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: 0,
    borderWidth: 0,
  },
  bubbleText: {
    fontSize: FontSize.xs,
    color: Colors.onSurface,
    lineHeight: 18,
  },
  bubbleTextUser: {
    color: Colors.white,
  },
});