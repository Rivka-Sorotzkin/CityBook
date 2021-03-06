USE [CityBookData]
GO
/****** Object:  Table [dbo].[Child]    Script Date: 30/06/2021 01:40:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Child](
	[ChildId] [int] IDENTITY(1,1) NOT NULL,
	[Full Name] [nvarchar](50) NULL,
	[BornDate] [date] NULL,
	[Tz] [nchar](10) NULL,
	[ParentId] [int] NOT NULL,
 CONSTRAINT [PK_Child] PRIMARY KEY CLUSTERED 
(
	[ChildId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 30/06/2021 01:40:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Tz] [nchar](9) NULL,
	[BornDate] [date] NULL,
	[Gender] [nvarchar](50) NULL,
	[Hmo] [nvarchar](50) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Child]  WITH CHECK ADD  CONSTRAINT [FK_Child_User] FOREIGN KEY([ParentId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Child] CHECK CONSTRAINT [FK_Child_User]
GO
