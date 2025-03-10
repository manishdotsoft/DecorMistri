import React from 'react';
import { Box, useTheme } from '@mui/material';
import Button from '../../atoms/Button/Button';
import { DividerLine } from '../../organisms/SignUp/SignUp.style';
import {
  ActionButtonsContainer,
  Card,
  CardBox,
  CardContainer,
  CardDate,
  CardDescription,
  CardTitle,
  HighlightedName,
  MainContainer,
  MoveToLiveLink,
  NotificationText,
  NotificationWrapper,
  Title,
} from './Notification.style';

const Notifications: React.FC = () => {
  const theme = useTheme();
  return (
    <MainContainer>
      <CardContainer>
        <Title variant="h6">Notifications</Title>
        <DividerLine />

        {/* Project Status Notification */}
        <CardBox>
          <Card>
            <Box display="flex" justifyContent="space-between">
              <CardTitle>CD-004-Anil-0K-02</CardTitle>
              <CardDate>15-Jan-05</CardDate>
            </Box>
            <CardDescription>Project is not submitted yet</CardDescription>
            <MoveToLiveLink to="#">Move to live</MoveToLiveLink>
          </Card>
        </CardBox>

        <Box>
          <NotificationWrapper>
            <NotificationText>
              <HighlightedName>Anil Bharadwaj</HighlightedName> sent report of
              project plan
            </NotificationText>
            <ActionButtonsContainer>
              <Button
                title="Accept "
                type="submit"
                variant="contained"
                onClick={() => {}}
                style={{
                  backgroundColor: theme.palette.primary.blue,
                  color: theme.palette.common.white,
                  borderRadius: '5px',
                  width: '80px',
                }}
              />
              <Button
                title="Decline "
                type="submit"
                variant="contained"
                onClick={() => {}}
                style={{
                  borderRadius: '5px',
                  backgroundColor: theme.palette.grey[200],

                  color: theme.palette.black[200],
                  width: '80px',
                }}
              />
            </ActionButtonsContainer>
          </NotificationWrapper>
        </Box>
      </CardContainer>
    </MainContainer>
  );
};

export default Notifications;
